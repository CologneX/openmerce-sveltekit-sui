<script lang="ts">
    import {Image, Text, Title} from "@svelteuidev/core";
    import {get} from "svelte/store";
    import {isLoggedInStore} from "$lib/utils/stores";
</script>

<div class="p-2">
    {#if !get(isLoggedInStore)}
        <div class="grid place-items-center w-screen max-w-sm gap-y-3">
            <Image src="emptycart.png" alt="Empty Cart" class="aspect-square w-32"/>
            <Title class="font-semibold" order={5}>Wow, your shopping cart is empty!</Title>
            <Text class="text-sm text-gray-500">Please log in or register to start shopping!</Text>
        </div>
    {/if}
</div>