import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#ffd6d6',
        canvasBackgroundColor: '#364c69',
        windowWidth: 1024,
        windowHeight: 768,
    },
});
