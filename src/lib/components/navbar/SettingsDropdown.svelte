<script lang="ts">
    import {Button, Card, Divider, Title} from '@svelteuidev/core';
    import Exit from "$lib/icons/Exit.svelte";
    import ThemeChange from "$lib/components/ThemeChange.svelte";
    import {isLoggedInStore} from "$lib/utils/stores";
    import {goto} from "$app/navigation";
</script>


<div class="flex flex-row h-48 gap-3 rounded-md p-2">
    <div class="flex-1 flex flex-col">
        <div class="flex-grow">
            <Card>
                <Title order="{4}" class="font-bold" color="blue">OMPLUS</Title>
            </Card>
        </div>
        <ThemeChange class="self-end"/>

    </div>
    <Divider orientation='vertical'/>
    <div class="flex-1 flex flex-col">
        <div class="flex-grow space-y-0">
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}
                    on:click={() =>goto('/profile')}
            >
                Profile
            </Button>
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}
                    on:click={() =>goto('/wishlist')}
            >
                Wishlist
            </Button>
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}
                    on:click={() =>goto('/transaction-list')}
            >
                Transaction
            </Button>
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}
                    on:click={() =>goto('/cart')}
            >
                Cart
            </Button>

        </div>
        {#if $isLoggedInStore}
            <Button class="self-end" variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}
                    loaderPosition="right">
                <Exit slot="rightIcon"/>
                Logout
            </Button>
        {/if}
    </div>
</div>

