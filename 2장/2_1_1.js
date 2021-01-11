/* 2.1.1 const let */
/* 변수 var로 선언-> const let으로 대체 */
if(true)
{
    var x = 3; // if문의 블록과 관계없이 접근 가능
    console.log(x);

    if(true)
    {
        const y = 3; //const와 let은 블록밖에서는 접근할 수 없다.
    }
}

/* 변수 선언 : var->const , 다른 값을 대입해야 하는 경우 : let */
/* var는 블록 밖에 서 접근 가능, const와 let은 블록밖에서는 접근할 수 없다. */
