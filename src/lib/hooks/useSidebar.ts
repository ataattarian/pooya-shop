import { useRecoilState } from 'recoil'
import { sidebarContext } from '../contexts'
export const useSidebar = () => {
    const [sidebar , setSidebar] = useRecoilState(sidebarContext)
    const closeSidebar = () => setSidebar(false)
    const openSidebar = () => setSidebar(true)
    return { sidebar , closeSidebar , openSidebar }
}