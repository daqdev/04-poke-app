import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemonzMok } from "../mocks/pokemons.mock";

describe("PokemonPage Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe llamar al pokemon mix array en el mount", () => {
    //aca tenemos q poner el spy antes de iniciar la pagina
    //ya que el metodo que queremos escuchar es parte de la inicializacion
    const spyPage = jest.spyOn(PokemonPage.methods, "mixPokemonArray");
    wrapper = shallowMount(PokemonPage);
    expect(spyPage).toHaveBeenCalled();
  });

  test("debe hacer match con  el snapshot cuando carga los pokemon", () => {
    const wrapper = shallowMount(PokemonPage, {
      // const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonzMok,
          pokemon: pokemonzMok[0],
          showPokemon: false,
          respondio: false,
          resultado: "Todavia no respondio!",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe mostrar los componentes de Pokemon Image y Pokemon Options", () => {
    const wrapper = shallowMount(PokemonPage, {
      // const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonzMok,
          pokemon: pokemonzMok[0],
          showPokemon: false,
          respondio: false,
          resultado: "Todavia no respondio!",
        };
      },
    });

    const pokemonImage = wrapper.find("pokemon-image-stub");
    const pokemonOptions = wrapper.find("pokemon-options-stub");

    expect(pokemonImage).toBeTruthy();
    expect(pokemonOptions).toBeTruthy();
    expect(pokemonImage.attributes("pokemonid")).toBe("1");
    expect(pokemonOptions.attributes("pokemons")).toBeTruthy();
  })

  test('pruebas con check answer', async ()=>{

    const wrapper = shallowMount(PokemonPage, {
      // const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonzMok,
          pokemon: pokemonzMok[0],
          showPokemon: false,
          respondio: false,
          resultado: "Todavia no respondio!",
        };
      },
    });

    await wrapper.vm.checkAnswer(1)
    
    expect(wrapper.find('h1').text()).not.toContain('Quien es este')
    expect(wrapper.vm.showPokemon).toBeTruthy()
    
    await wrapper.vm.checkAnswer(2)
    expect(wrapper.vm.resultado).toBe('NOOOO! era ')

  })
});




