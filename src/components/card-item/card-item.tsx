import * as React from 'react';
import { IcardItemState } from './Icard-itemState';
import { IcardItemProps } from './Icard-itemProps';
import styles from './card-item.module.scss';

class CardItem extends React.Component<IcardItemProps, IcardItemState> {
  constructor(props: IcardItemProps | Readonly<IcardItemProps>) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles.cardItem}`}>
        <h3>card-item Component!</h3>
      </div>
    );
  }
}

export default CardItem;
