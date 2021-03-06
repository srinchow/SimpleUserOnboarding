# SimpleUserOnboarding




## Endpoint 
```
        path : /login
        body : {username:string,password:string}
        Return : JWT_TOKEN:Success | error:Failure
```
<br>


```

        path : /addAnswer 
        header : {Authorization:JWT_TOKEN}
        body : {answers:[{qid:string,type:string,response:string},...]}
        Returns : 200:Success | Failure
```







<br>
<br>

## Arch For Cloud
<img src = 'SimpleArch.png'>




## ER Diagram

<img src = 'simpleERdiagram.png'>




