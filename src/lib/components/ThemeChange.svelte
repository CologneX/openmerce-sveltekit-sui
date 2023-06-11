<script>
    import {colorScheme, NativeSelect} from "@svelteuidev/core";

    $: localStorage.setItem('prefTheme', $colorScheme);
</script>


<NativeSelect data="{[{
    label: 'Dark',
    value: 'dark'
}, {
    label: 'Light',
    value: 'light'
},  {
    label: 'System',
    value: 'system'
}
]}"

              bind:value={$colorScheme}
/>