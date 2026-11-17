import re,subprocess,sys
slugs="ios-apps android-apps flutter-apps react-native-apps shopify-apps wix-apps woocommerce-plugins browser-extensions".split()
for s in slugs:
    html=subprocess.run(["curl","-s","https://www.ecomswiftllc.com/"+s],capture_output=True,text=True,encoding="utf8").stdout
    ids=[]
    for m in re.finditer(r'id="(comp-[a-z0-9]+)__'+re.escape(s)+r'-0"',html):
        if m.group(1) not in ids: ids.append(m.group(1))
    assert len(ids)==5,(s,ids)
    p=s+".css"; c=open(p,encoding="utf8").read()
    n=0
    def rep(m):
        global n; n+=1
        return ids[int(m.group(1))-4]+"__"
    c2=re.sub(r'comp-[a-z0-9]*?zzd([4-8])__',lambda m:(rep(m)),c)
    open(p,"w",encoding="utf8").write(c2)
    print(s,ids,n)
