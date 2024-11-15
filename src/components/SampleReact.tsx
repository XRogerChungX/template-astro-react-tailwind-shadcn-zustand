import useStore from '@/store/sampleStore'

export const SampleReact = () => {

    const bears = useStore(state => state.bears)

    return (
        <div>SampleReact {bears}</div>
    )
}
