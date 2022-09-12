import SearchMovie from './SearchMovie';
import AddMovie from './AddMovie';
import { BackgroundFilter, HeaderControl, HeaderTop } from './HeaderForm.styles';

const HeaderForm: React.FunctionComponent = () => (
    <HeaderControl>
        <BackgroundFilter>
            <HeaderTop>
            <p><strong>netflix</strong>roulette</p>
            <AddMovie />
            </HeaderTop>                  
            <SearchMovie />
        </BackgroundFilter>
    </HeaderControl>
);
    


export default HeaderForm;