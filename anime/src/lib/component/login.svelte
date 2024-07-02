<script>
   import Button from "./button.svelte";

   export let email = "";
   export let password = "";
</script>

<form method="POST">
    <div class="form-field">
        <label for="answer-a">Email</label>
        <input type="email" id="answer-a" bind:value={email}>
        <div><p></p>
        </div>
    </div>
    <div class="form-field" >
        <label for="answer-b">Password</label>
        <input type="password" id="answer-b" bind:value={password}>
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