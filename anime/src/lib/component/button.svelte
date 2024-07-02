<script>
    export let style = 'primary';
    export let invert = false
    export let shadow = false;
</script>
<button class="{style}" class:invert={invert} class:shadow={shadow} type="submit">
    <slot></slot>
</button>

<style>
    .primary{
        background-color: rgb(117, 244, 117);
/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3009291486. */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
    }
    .invert{
        background-color: #fff;
        border: 3px solid rgb(117, 244, 117);
        color: rgb(117, 244, 117);
        box-shadow: 1px 1px rgb(117, 244, 117);
    }
    .danger{
        background-color: rgb(244, 117, 117);
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;

    }
    .danger.invert{
        background-color: #fff;
        border: 3px solid rgb(244, 117, 117);
        color: rgb(244, 117, 117);
        box-shadow: 1px 1px rgb(244, 117, 117);
    }
    .cool{
        background-color: rgb(117, 244, 244);
        border: none;
        color: rgb(1, 3, 29);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: bolder;
        border-radius: 5px;
    }
    .cool.invert{
        background-color: #fff;
        border: 3px solid rgb(117, 244, 244);
        color: rgb(117, 244, 244);
    }
    .shadow{
        box-shadow: 1px 1px rgb(22, 24, 29);
    }
</style>