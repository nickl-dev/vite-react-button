import { Item } from '../../types';

type CollectionProps = {
  title: string;
  items: Item[];
};

const Collection = ({ title, items }: CollectionProps): JSX.Element => {
  return (
    <>
      <div className='text-lg mb-2 font-semibold'>{title}</div>

      <div className='d-flex gap-4 mb-6'>
        {items?.map((item, index) => (
          <button
            key={index}
            className={item.className}
            type='button'
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default Collection;
