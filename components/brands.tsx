


export default function Brands() {
    return (
      <div className="py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-bold text-3xl leading-8 light:text-gray-900">
          المتاجر المدعومة
          </h2>
          <br/>
          <span className="text-gray-400 dark:text-gray-400">
          مهما كان قطاعك، وأيًا كانت منتجاتك صيغها يخدم الجميع
          </span>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2
           items-center gap-x-8 gap-y-10 
           sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 
           lg:max-w-none lg:grid-cols-2">
            <img
              className="col-span-2 dark:bg-gray-800
              rounded-3xl
              py-4
              max-h-24  w-full object-contain lg:col-span-1"
              src="/img/brands/zid.png"
              alt="Zid"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 
              dark:bg-gray-800
              py-6
              rounded-3xl
              max-h-24 
              w-full object-contain lg:col-span-1"
              src="/img/brands/salla.png"
              alt="Salla"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    )
  }
  