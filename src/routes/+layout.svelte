<script lang="ts">
    import "../app.css";
    import {AppShell, Box, colorScheme, Container, Header, Overlay, SvelteUIProvider} from '@svelteuidev/core';
    import {getTheme} from "$lib/utils/themeChanger";
    import {onMount} from "svelte";
    import {overlayVisibleStateStore, screenWidthStore} from "$lib/utils/stores";
    import Navbar from '$lib/components/navbar/Navbar.svelte'
    import {register} from "swiper/element/bundle";
    import {page} from "$app/stores";


    onMount(() => {
            register();
            getTheme();
        }
    )
</script>
<svelte:window bind:innerWidth={ $screenWidthStore}/>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
    <AppShell>
        <Header slot="header"
                class="grid grid-cols-[auto_1fr_auto] content-center justify-center drop-shadow-md p-2 sticky top-0">
            <Navbar/>
        </Header>
        <Box>
            {#if $overlayVisibleStateStore}
                <Overlay opacity={0.2} color="#000" zIndex={40} class="fixed"/>
            {/if}
            <Container size="{$page.route.id === '/'? 'xl':'lg'}">

                <slot/>
            </Container>
        </Box>
    </AppShell>
</SvelteUIProvider>