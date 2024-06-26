export const HelloTsx = defineComponent({
  name: 'HelloTsx',
  props: {
    value: {
      type: Number,
      default: undefined,
    },
  },
  emits: {
    'update:value': (value?: number) => value,
  },
  setup(props, { emit }) {
    const inputValue = ref<number>(props.value ?? 0)
    watch(() => inputValue.value, value => emit('update:value', value))
    const add = () => inputValue.value++
    const sub = () => inputValue.value--
    return {
      inputValue,
      add,
      sub,
    }
  },
  render() {
    return (
      <div>
        <button class="rounded-md bg-black/10 p-x-8 p-y-2 text-3xl active:bg-black/20" onClick={this.sub}>-</button>
        <span class="p-x-8 p-y-2 text-3xl">{this.inputValue}</span>
        <button class="rounded-md bg-black/10 p-x-8 p-y-2 text-3xl active:bg-black/20" onClick={this.add}>+</button>
      </div>
    )
  },
})
