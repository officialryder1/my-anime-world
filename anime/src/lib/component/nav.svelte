
<div class="tab">
    <ul>
        <a href="/"><li>home</li></a>
        <a href="/login"><li class="active">login</li></a>
        <a href="/register"><li>register</li></a>
        <a href="/profile"><li>profile</li></a>
</div>


<style>
    .active{
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
    .tab{
        margin-bottom: 40px;
        
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
        margin-top: 20px;
    }
    li{
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    /* .btn{
        max-height: 40px;
        width: 70px;
        border: 1px solid #d91b42;
        text-align: center;
        padding-top: 1%;
        border-radius: 3px;
        color: white;
        background-color: #d91b42;
        cursor: pointer;
    }
    .btn:hover{
        text-decoration: none;
    } */
</style>