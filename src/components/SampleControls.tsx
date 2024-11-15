import useStore from '@/store/sampleStore'

export const SampleControls = () => {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
}
