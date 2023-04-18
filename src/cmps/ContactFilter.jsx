import React from 'react'
import { useFormRegister } from '../customHooks/useFormRegister'
import { getBitcoinSvg } from '../services/svg.service'


export function ContactFilter(props) {
  const [register] = useFormRegister(
    { ...props.filterBy },
    props.onChangeFilter
  )

  return (
    <form className="contact-filter">
      <h2 className='flex justify-center align-center'>Search for a quick deal! <span
            dangerouslySetInnerHTML={{
              __html: getBitcoinSvg('handshake'),
            }}
          /></h2>
      <section>
        <label htmlFor="name">Name</label>
        <input {...register('name', 'text')} />
      </section>
      <section>
        <label htmlFor="phone">Phone</label>
        <input {...register('phone', 'number')} />
      </section>
    </form>
  )
}
