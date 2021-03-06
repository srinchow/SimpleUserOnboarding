# SimpleUserOnboarding




## Endpoint 
```
        method : POST
        path : /login
        body : {username:string,password:string}
        Return : JWT_TOKEN:Success | error:Failure
```
<br>


```
        method : POST
        path : /addAnswer 
        header : {Authorization:JWT_TOKEN}
        body : {answer:[{qid:string,type:string,response:string}]}
        Returns : 200:Success | Failure
```



<br>

```
        method : GET
        path : /CalcScore 
        header : {Authorization:JWT_TOKEN}
        Returns : 200:Success,Score:Number | Failure
```


<br>

```
        method:GET
        path : /getAllAnswers 
        header : {Authorization:JWT_TOKEN}
        body : {}
        Returns : 200:Success , answers:[{qid:string,type:string,response:string},...] | Failure
```


<br>


```     method:GET
        path: /isOnboarded
        header : {Authorization:JWT_TOKEN}
        Returns : 200:Success , {true|false}  || failure (500:Internal Server Error)
```




<br>


```     method:POST
        path: /signup
        body : {username:string,password:string,confirmpassword:string}
        Returns : 200:Success , {true|false}  || failure (500:Internal Server Error|409:User Already Exists)
```



<br>
<br>

## Arch For Cloud
<img src = 'SimpleArch.png'>




## ER Diagram

<img src = 'simpleERdiagram.png'>




