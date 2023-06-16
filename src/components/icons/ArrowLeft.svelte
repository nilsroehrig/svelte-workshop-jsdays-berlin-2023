<script>
  export let width = 24;
  export let height = 24;
  export let color = "currentColor";
  export let decorative = true;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke={color}
  aria-hidden={decorative}
  {width}
  {height}
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
  />
</svg>
