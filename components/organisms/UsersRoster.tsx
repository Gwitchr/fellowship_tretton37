import {NinjaCard} from '../molecules'
import {iNinja} from '../../types'

function UsersRoster({ ninjas }) {
  return (
    <section className="row-start-2 col-span-2 flex justify-center mt-5">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 px-3">
        {ninjas.map((el:iNinja,i) => (
          <NinjaCard key={el.name} className="animate__animated animate__fadeInLeft" style={{ animationDelay: `${i ** 0.1 || 1}s` }} info={el} />
        ))}
      </div>

    </section>
  );
}

export default UsersRoster;
