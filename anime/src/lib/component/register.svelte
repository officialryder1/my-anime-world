<script>
   import Button from "$lib/component/button.svelte"
   import { enhance } from '$app/forms'



</script>

<form method="post" use:enhance>

    
    <!-- <div class="form-field" >
        <label for="question">Username</label>
        <input type="text" id="question">
        <div>
            <p class="error"></p>
        </div>
    </div> -->
    <div class="form-field">
        <label for="answer-a">Email</label>
        <input type="email" id="answer-a" name="email">
        <div><p></p>
        </div>
    </div>
    <div class="form-field">
        <label for="answer-b">Password</label>
        <input type="password" id="answer-b" name="password">
        <div>
            <p class="error"></p>
        </div>
    </div>

    <Button style="danger" shadow={true} invert={false}>Log In</Button>

</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
        height: 35px;
        text-align: center;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>