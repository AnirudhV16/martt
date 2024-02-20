const image=document.querySelectorAll('img');
const items=['item0','item1','item2','item3','item4','item5','item6','item7','item8','item9'];
const prices=[['000','011','022'],['111','122','133'],['222','122','133'],['333','122','133'],['444','122','133'],['555','122','133'],['666','122','133'],['777','122','133']]
const grams=['250gms','500gms','1kg']
let varr=0;

image.forEach((i)=>{
    i.addEventListener("click",(e)=>{
        s=e.target.id;
        varr=e.target.id;
        dd=document.querySelector(`.card${e.target.id}`)
        document.getElementById(s).style.display='none';
        document.getElementById((Number(s)*10)+Number(s)).style.display='none';
        const hid=document.createElement('div');
        const hh=document.createElement('h1');
        const hh1=document.createElement('h2');
        const ddd=document.createElement('div');
        const hh2=document.createElement('h2');
        const hh3=document.createElement('h2');
        const hh7=document.createElement('h2');
        const hh8=document.createElement('h2');
        const hh9=document.createElement('h2');
        const ddd2=document.createElement('div');
        const ddd1=document.createElement('div');
        const hh4=document.createElement('h2');
        const hh5=document.createElement('h2');
        const hh6=document.createElement('h2');

        hh.innerHTML='DETAILS';
        hh1.innerHTML=`item:${items[s]}`;
        ddd.classList.add('new');
        ddd1.classList.add('new1');
        ddd2.classList.add('new2');
        hh2.innerHTML='grams';
        hh3.innerHTML='price';
        hh7.innerHTML=`${prices[s][0]}`;
        hh8.innerHTML=`${prices[s][1]}`;
        hh9.innerHTML=`${prices[s][2]}`;
        hh4.innerHTML=`${grams[0]}`;
        hh5.innerHTML=`${grams[1]}`;
        hh6.innerHTML=`${grams[2]}`;

        dd.appendChild(hid);
        hid.appendChild(hh);
        hid.appendChild(hh1);

        hid.appendChild(ddd);
        ddd1.appendChild(hh2);
        ddd2.appendChild(hh3);
        ddd.appendChild(ddd1);
        ddd.appendChild(ddd2);
        ddd1.appendChild(hh4);
        ddd1.appendChild(hh5);
        ddd1.appendChild(hh6);
        ddd2.appendChild(hh7);
        ddd2.appendChild(hh8);
        ddd2.appendChild(hh9);

        hid.classList.add('detailss');
        const det=dd.querySelector('.detailss');
        det.id=s;
        const yy1=det.querySelector('h1');
        const yy=det.querySelectorAll('h2');
        yy1.id=s;
        for(var k=0;k<yy.length;k++){
            yy[k].id=s;
        }
        const yy2=det.querySelector('.new');
        const yy3=det.querySelector('.new1');
        const yy4=det.querySelector('.new2');
        yy2.id=s;
        yy3.id=s;
        yy4.id=s;

        det.addEventListener("click",(e)=>{
            v=e.target.id;
            dd=document.querySelector(`.card${e.target.id}`);
            det.remove();
            document.getElementById(v).style.display='block';
            document.getElementById((Number(v)*10)+Number(v)).style.display='block';
        })
    })
})

