<script lang="ts">
    import {Button, Card, Divider, Title} from '@svelteuidev/core';
    import Exit from "$lib/icons/Exit.svelte";
    import ThemeChange from "$lib/components/ThemeChange.svelte";
    import {isLoggedInStore} from "$lib/utils/stores";
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
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}>
                Profile
            </Button>
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}>
                Wishlist
            </Button>
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}>
                Transaction
            </Button>
            <Button variant="subtle" compact ripple fullSize override={{ justifyContent: 'flex-start'}}>
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

