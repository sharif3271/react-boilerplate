import { useDispatch } from 'react-redux';
import * as actions from './action';
import { HomeServices } from 'src/services';

export class HomeFacade {

    private dispatch = useDispatch();
    private service = new HomeServices();

    updateList() {
        this.dispatch(actions.setListLoading(true));
        this.service.getPostList()
            .then(({data}) => {
                if (Array.isArray(data)) {
                    this.dispatch(actions.setPostsList(data));
                } else {
                    this.dispatch(actions.setListError(true));
                }
            })
            .catch(() => {
                this.dispatch(actions.setListError(true));
            })
            .finally(() => {
                this.dispatch(actions.setListLoading(false));
            });
    }
}