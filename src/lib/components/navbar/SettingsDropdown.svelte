<script lang="ts">
    import {Button, Card, Divider, Group, Text} from '@svelteuidev/core';
    import Exit from "$lib/icons/Exit.svelte";
    import ThemeChange from "$lib/components/ThemeChange.svelte";
</script>


<div class="flex flex-row h-full gap-3">
    <div class="flex-1 flex flex-col">
        <div class="flex-grow">
            <Card>
                <Text class="text-md font-bold">OMPLUS</Text>
            </Card>
        </div>
        <ThemeChange class="self-end"/>

    </div>
    <Divider orientation='vertical'/>
    <div class="flex-1 flex flex-col">
        <div class="flex-grow grid-flow-row grid">

                <Button variant="subtle" compact ripple>
                    Profile
                </Button>
                <Button variant="subtle" compact ripple align="right">
                    Wishlist
                </Button>
                <Button variant="subtle" compact ripple class="text-start" >
                    Transaction
                </Button>
                <Button variant="subtle" compact ripple class="text-end" >
                    Cart
                </Button>

        </div>
        <Button class="self-end" variant="subtle" compact ripple loaderPosition="right">
            <Exit slot="rightIcon"/>
            Logout
        </Button>
    </div>
</div>

