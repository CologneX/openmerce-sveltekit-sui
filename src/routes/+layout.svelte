<script lang="ts">
    import "../app.css";
    import {AppShell, Box, colorScheme, Container, Group, Header, Overlay, SvelteUIProvider} from '@svelteuidev/core';
    import {getTheme} from "$lib/utils/themeChanger";
    import {onMount} from "svelte";
    import {overlayVisibleStateStore} from "$lib/utils/stores";
    import Navbar from '$lib/components/navbar/Navbar.svelte'
    import {register} from 'swiper/element/bundle';
    onMount(() => {
        register();
            getTheme();

        }
    )
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
    <Group zIndex={50} class="z-50">
        <AppShell class="z-50">
            <Header slot="header"
                    class="grid grid-cols-[auto_1fr_auto] content-center justify-center drop-shadow-md p-2">
                <Navbar/>
            </Header>
        </AppShell>
    </Group>
    <Container size="xl">
        <Box>
            {#if $overlayVisibleStateStore}
                <div>
                    <Overlay opacity={0.2} color="#000" zIndex={40} class="z-40"/>
                </div>
            {/if}
            <slot/>
        </Box>
    </Container>
</SvelteUIProvider>