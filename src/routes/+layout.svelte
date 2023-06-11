<script lang="ts">
    import "../app.css";
    import {
        ActionIcon,
        AppShell,
        Box,
        colorScheme,
        Container,
        Group,
        Header,
        Input,
        Overlay,
        SvelteUIProvider,
        Tooltip
    } from '@svelteuidev/core';
    import {getTheme} from "$lib/utils/themeChanger";
    import {onMount} from "svelte";
    import Search from "$lib/icons/Search.svelte";
    import Settings from "$lib/icons/Settings.svelte";
    import ThemeChange from "$lib/components/ThemeChange.svelte";
    import Logo from "$lib/icons/Logo.svelte";
    import SettingsDropdown from "$lib/components/navbar/SettingsDropdown.svelte";
    import {fade} from "svelte/transition";

    onMount(() => {
            getTheme();
        }
    )
    let overlayVisibleState = false;
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver="{$colorScheme}"
>
    <Group>
        <AppShell class="z-50">
            <Header slot="header"
                    class="grid grid-cols-[auto_1fr_auto] content-center justify-center drop-shadow-xl p-2">
                <div class="hidden md:flex items-center">
                    <Logo/>
                </div>
                <div class="max-w-4xl w-full place-self-center">
                    <Input icon="{Search}" placeholder="Search OpenMerce" size="xs"
                           on:focus={() => overlayVisibleState = true} on:blur={() => overlayVisibleState = false}
                    />
                </div>
                <div class="flex w-full justify-end space-x-2">
                    <Tooltip label={SettingsDropdown} closeDelay={300} color="currentColor" radius="xs"
                             position="bottom"
                             withArrow={false} allowPointerEvents
                             on:mouseenter={() => overlayVisibleState = true}
                             on:mouseleave={() => overlayVisibleState = false}
                    >
                        <ActionIcon size="lg" variant="transparent" color="currentColor"

                        >
                            <Settings/>
                        </ActionIcon>
                    </Tooltip>
                </div>
            </Header>
        </AppShell>
    </Group>
    <Container>
        <Box>
            {#if overlayVisibleState}
                <div transition:fade={{duration:100}}>
                    <Overlay opacity={0.2} color="#000" class="z-40"/>
                </div>
            {/if}
            <slot/>
        </Box>
    </Container>
</SvelteUIProvider>