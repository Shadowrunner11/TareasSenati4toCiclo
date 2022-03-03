def romanize (num:int)->str:
    val =[1000, 900 ,500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV" ,"I" ]
    contador = 0
    ans = ""
    while num:
        while num >= val[contador]:
            ans+=romans[contador]
            num-=val[contador]
        contador+=1
    return ans