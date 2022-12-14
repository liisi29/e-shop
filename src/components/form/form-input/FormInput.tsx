import './formInput.scss';

export default function FormInput(props: any & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div className='group'>
      <input className='form-input' {...rest} />
      {label && (
        <label
          // @ts-ignore
          className={`${rest?.value?.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
