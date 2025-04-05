type ProductSpecProps = {
  data: {
    name: string
    value: string | number
  }[]
}

export const ProductSpec = ({ data }: ProductSpecProps) => {
  return (
    <div className='px-6 mt-8'>
      <h2 className='text-3xl mb-4'>Specifications</h2>
      <table className='space-y-4 w-full md:max-w-lg'>
        <tbody className=''>
          {data.map((item, index) => (
            <tr className='flex justify-between items-center py-2' key={index}>
              <td className='flex-1 text-onBackground font-thin'>
                {item.name}
              </td>
              <td className='flex-1 text-onBackground font-thin'>
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
