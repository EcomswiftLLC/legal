import re,sys,os
OLD="mwjlx11w,mwjlx122,mwjlx12h,mwjlx12j,mwjlx12r1,mwjlx1301,mwjlx13l,mwjlx13v,mwjlx13y1,mwjlx14f2,mwjlx14h,mwjlx14h6,mwjlx14o1,mwjlx14p2,mwjlx14q,mwjlx14t,mwjlx14u5,mwjlx14w,mwjlx14x1,mwjlx150,mwjlx1514,mwjlx1522,mwjlx153,mwjlx154,mwjlx156,mwjlx1566,mwjlx1575,mwjlx1581,mwjlx1587".split(',')
slug=sys.argv[1]; new=sys.argv[2].split(',')
assert len(new)==len(OLD),(len(new),len(OLD))
m=dict(zip(OLD,new))
css=open('platform-page.css',encoding='utf8').read()
# common prefix of the child ids (not the section)
kids=new[1:]
pre=os.path.commonprefix(kids)
css=css.replace('[id^="comp-mwjlx1"]','[id^="comp-%s"]'%pre)
def rep(x):
    t=x.group(1)
    return 'comp-'+m[t] if t in m else x.group(0)
css=re.sub(r'comp-(mwjlx[a-z0-9]+)',rep,css)
left=set(re.findall(r'mwjlx[a-z0-9]+',css))
print(slug,'prefix',pre,'leftover',left)
open('plat/%s.css'%slug,'w',encoding='utf8').write(css)
