var xmastree=a=>'\n'+[R=a,''][1].padStart(R+1,'0').split('').map((a,b)=>(b==0?'*':a).repeat((s=b>1?b-1:0)*2+1).padStart(R+s,' ')).join('\n')
