import {
  connect,
  Connect,
  MapStateToPropsParam,
  InferableComponentEnhancerWithProps,
  DispatchProp,
} from 'react-redux';
import { StoreState } from './reducer';

export interface ConnectStore extends Connect {
  <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = StoreState>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
  ): InferableComponentEnhancerWithProps<TStateProps & DispatchProp, TOwnProps>;
}

export default connect as ConnectStore;
