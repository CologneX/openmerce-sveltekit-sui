<script>
    import {ActionIcon, Button, Divider, Input, Tooltip} from "@svelteuidev/core";
    import Logo from "$lib/icons/Logo.svelte";
    import Search from "$lib/icons/Search.svelte";
    import Settings from "$lib/icons/Settings.svelte";
    import SettingsDropdown from "$lib/components/navbar/SettingsDropdown.svelte";
    import {overlayVisibleStateStore} from "$lib/utils/stores";
    import ShoppingCart from "$lib/icons/ShoppingCart.svelte";
    import CartDropdown from "$lib/components/navbar/CartDropdown.svelte";
    import {goto} from "$app/navigation";
</script>

<div class="hidden sm:flex items-center">
    <button on:click={()=>goto('/')}>
        <Logo/>
    </button>
</div>
<div class="max-w-4xl w-full place-self-center">
    <Input icon="{Search}" placeholder="Search OpenMerce" size="xs"
           on:focus={() => $overlayVisibleStateStore = true} on:blur={() => $overlayVisibleStateStore = false}
    />
</div>
<div class="flex w-full justify-end space-x-2">
    <Tooltip label={CartDropdown} color="currentColor"
             position="bottom"
             withArrow={false} allowPointerEvents
             on:mouseenter={() => $overlayVisibleStateStore = true}
             on:mouseleave={() => $overlayVisibleStateStore = false}
    >
        <ActionIcon size="lg" variant="transparent" color="currentColor"
        >
            <ShoppingCart/>
        </ActionIcon>
    </Tooltip>
    <Divider orientation='vertical'/>
    <Button variant="outline" ripple class="font-bold text-sm w-20" on:click={()=>goto('/login')}>
        Login
    </Button>
    <Button ripple class="font-bold text-sm w-20" on:click={()=>goto('/register')}>
        Register
    </Button>

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