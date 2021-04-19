import {NinjaCard} from '../molecules'
import {iNinja} from '../../../types'

function UsersRoster({ ninjas }) {
  return (
    <section className="row-start-2 col-span-2 flex justify-center mt-5">
      <div className="container grid grid-cols-2 gap-4">
        {ninjas.map((el:iNinja) => (
          <NinjaCard key={el.name} info={el} />
        ))}
      </div>

    </section>
  );
}

export default UsersRoster;
