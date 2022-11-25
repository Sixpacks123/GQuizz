<template>
    <div>
    <div class="px-4 sm:px-6 lg:px-8">
        <h1 class="text-extrabold  text-center  leading-10 tracking-tight sm:text-3xl  md:text-4xl">Arts movements</h1>
        <div class="flex flex row justify-center mt-2 mb-2">
            <input type="text" v-model="searchValue" class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline" placeholder="Search movements" id="search-input"/>
        </div>
        <div v-for="art in filteredarts" :key="art.name">
            <h3 class=" font-extrabold">{{ art.name }}</h3>
            <p> {{ art.def}}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: '',
            loading: false,
serach: [],
errorMessage: null,
    searchTerm: "",

            arts : [{
  def: "Three-dimensional art is defined as art with all the dimensions of height, width, and depth",
  name: "3D"
}, {
  def: "Abstract art uses visual language of shape, form, color and line to create a composition which may exist with a degree of independence from visual references in the world",
  name: "Abstract art"
}, {
  def: "Anti-design is an approach that bucks the rules of conventional design",
  name: "Anti-design"
}, {
  def: "Art deco is a popular design characterized especially by sleek geometric or stylized forms and by the use of man-made materials",
  name: "Art Deco"
}, {
  def: "Gives primary importance to the motif, to perceived nature as it is, to the peasant world, rather than to historical, mythological or religious scenes.",
  name: "Arts and Crafts"
}, {
  def: "Is characterized by exaggeration of movement, decorative overload, dramatic effects, tension, exuberance of forms, sometimes pompous greatness and contrast",
  name: "Baroque"
}, {
  def: "a Bauhaus work is characterized by raw materials, in their natural state, rigid forms. The colors are sober and neutral. The proportions of the graphic compositions are balanced and the messages clear",
  name: "Bauhaus"
}, {
  def: "A cartoon is a type of visual art that is typically drawn, frequently animated, in an unrealistic or semi-realistic style.",
  name: "Cartoon"
}, {
  def: "Is defined by a set of values ​​and criteria which outline an ideal embodied in the “honest man” and which develop an aesthetic based on a search for perfection, its key word is reason.",
  name: "Classicism"
}, {
  def: "Conceptual art is art in which the concept(s) or idea(s) involved in the work take precedence over traditional aesthetic, technical, and material concerns",
  name: "Concept art"
}, {
  def: "In Cubist artwork, objects are analyzed, broken up and reassembled in an abstracted form",
  name: "Cubism"
}, {
  def: "Dadaism consist of artists who rejected the logic, reason, and astheticism of modern capitalist society",
  name: "Dadaism"
}, {
  def: "Flat design is a user interface design style that uses simple, two-dimensional elements and bright colors",
  name: "Flat design"
}, {
  def: "The artists are engaged in experimental art performances which emphasize the artistic process over the finished product",
  name: "Fluxus "
}, {
  def: "Futurism emphasized dynamism, speed, technology, youth, violence, and objects such as the car, the airplane, and the industrial city.",
  name: "Futurism"
}, {
  def: "Impressionist painters favor landscapes or scenes of everyday life with more vivid and clear colors, simple patterns and plays of light",
  name: "Impressionism"
}, {
  def: "Isometric art is a method for visually representing three-dimensional objects in two dimensions in technical and engineering drawings",
  name: "Isometric"
}, {
  def: " Line art is any image that consists of distinct straight lines or curves placed against a background (usually plain), without gradations in shade (darkness) or hue (color) to represent objects.",
  name: "Line art"
}, {
  def: "Mannerism seeks elegance, refinement, unusual, surprise effect",
  name: "Mannerism"
}, {
  def: "Minimalism is about avoiding the unnecessary , it's about simplicity, utility and elegance",
  name: "Minimalism"
}, {
  def: "Gives primary importance to the motif, to perceived nature as it is, to the peasant world, rather than to historical, mythological or religious scenes.",
  name: "Naturalism"
}, {
  def: "Neoclassicism is characterized by clarity of form, sober colors, shallow space, strong horizontal and verticals that render that subject matter timeless, and classical subject matter (or classicizing contemporary subject matter).",
  name: "Neoclassicism"
}, {
  def: "New realism is a movement which aims to describe ordinary everyday reality without any idealisation",
  name: "New realism"
}, {
  def: "Is characterized by bright, contrasting, multicolored, discordant and acid colors. The images are distorted, confused, they often refer to nature, religion, the cosmos and love",
  name: "Phychedelic"
}, {
  def: "It's an art each pixel assembled make an image",
  name: "Pixel art "
}, {
  def: "Pointillism is the practice of applying small strokes or dots of colour to a surface so that from a distance they visually blend together",
  name: "Pointillism"
}, {
  def: "Pop art is characterized by a deconstruction of images seen in popular culture – television, comic books, magazines, movies and other various forms of advertising",
  name: "Pop art"
}, {
  def: "Aims to represent reality as faithfully as possible, with subjects and characters chosen from the middle or working classes.",
  name: "Realism"
}, {
  def: "It's style in interior design, the decorative arts, painting, architecture, and sculpture. It is characterized by lightness, elegance, and an exuberant use of curving natural forms in ornamentation.",
  name: "Rococo"
}, {
  def: "Romanticism was characterized by its emphasis on emotion and individualism, clandestine literature, idealization of nature, suspicion of science and industrialization, and glorification of the past with a strong preference for the medieval rather than the classical",
  name: "Romanticism"
}, {
  def: "It's an art that is looking to make virtual objects appear like real ones.",
  name: "Skeuomorphism"
}, {
  def: "A surrealist work is made up of unexpected elements, which do not necessarily have any connection with each other. Surrealist artists distort objects to create new iconographic approaches",
  name: "Surrealism"
}, {
  def: "Symbolism represent absolute truths symbolically through language and metaphorical images, mainly as a reaction against naturalism and realism",
  name: "Symbolism"
}, {
  def: "Urban art combines street art and graffiti and is often used to summarize all visual art forms arising in urban areas, being inspired by urban architecture or present urban lifestyle.",
  name: "Urban art"
}]
        }
    },
    computed: {
  filteredarts() {
    let one = this.arts
    
    // Process search input
    if (this.searchValue != '' && this.searchValue) {
        one = one.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }
        
        return one
  }
}
}
</script>