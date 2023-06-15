<script>
    import {ActionIcon, Input, Tooltip} from "@svelteuidev/core";
    import Logo from "$lib/icons/Logo.svelte";
    import Search from "$lib/icons/Search.svelte";
    import Settings from "$lib/icons/Settings.svelte";
    import SettingsDropdown from "$lib/components/navbar/SettingsDropdown.svelte";
    import {overlayVisibleStateStore} from "$lib/utils/stores";
</script>

<div class="hidden md:flex items-center">
    <Logo/>
</div>
<div class="max-w-4xl w-full place-self-center">
    <Input icon="{Search}" placeholder="Search OpenMerce" size="xs"
           on:focus={() => $overlayVisibleStateStore = true} on:blur={() => $overlayVisibleStateStore = false}
    />
</div>
<div class="flex w-full justify-end space-x-2">
    <Tooltip label={SettingsDropdown} color="currentColor" radius="xs"
             position="bottom"
             withArrow={false} allowPointerEvents
             on:mouseenter={() => $overlayVisibleStateStore = true}
             on:mouseleave={() => $overlayVisibleStateStore = false}
    >
        <ActionIcon size="lg" variant="transparent" color="currentColor"
        >
            <Settings/>
        </ActionIcon>
    </Tooltip>
</div>