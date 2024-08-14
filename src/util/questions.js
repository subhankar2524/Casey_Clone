export const QUESTIONS = [
  {
    id: 1,
    type: 'single-answer',
    prompts: [
      {
        type: 'text', content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        

        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        


        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum` },
      { type: 'image', content: 'https://picsum.photos/seed/picsum/200/300' },
    ]
  },
  {
    id: 2,
    type: 'mcq',
    prompts: [
      {
        type: 'text', content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nostra semper mauris netus consequat eget orci magnis integer convallis. Aenean semper habitasse convallis nisl sit dignissim auctor. Massa arcu pharetra venenatis; nisi laoreet mi natoque. Elementum suscipit magna mus vivamus justo ultrices aliquet. Et vel aptent gravida massa mauris odio purus volutpat. Habitant leo rhoncus cras quisque magna.

Ridiculus venenatis blandit primis mattis montes natoque mollis sociosqu. Turpis lacus cras ad torquent nostra. Ipsum cras vehicula taciti placerat, nascetur viverra. Dictum cras mus hendrerit egestas class condimentum. Felis massa quisque massa placerat fermentum. Libero velit cursus pharetra magnis elementum natoque pellentesque. Per taciti volutpat ultricies hac nulla tortor iaculis dis. Vel ligula quam vehicula interdum blandit fringilla. Faucibus sed luctus suspendisse non cursus egestas imperdiet.

Id montes morbi facilisis ac dis ad velit nisl ridiculus? Eros at pharetra id class nam magna. Ultrices adipiscing porta euismod nostra risus congue bibendum. Iaculis massa tortor dolor est justo nullam velit ex nisi. Placerat viverra molestie litora nam nunc velit eget eleifend. Eget risus quam justo suspendisse elementum litora tristique tempor senectus. Posuere class ante est parturient posuere iaculis est tellus. Elementum maximus volutpat scelerisque tellus laoreet. Senectus tincidunt vel praesent pellentesque neque sollicitudin.` },
    ],
    options: ['Red', 'Blue', 'Green', 'Yellow']
  },

  {
    id: 3,
    type: 'mcq',
    prompts: [
      { type: 'text', content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie augue amet feugiat fringilla quam netus, ac hac. Molestie etiam aptent; per rutrum ligula lacinia cras eros. At aliquam sed netus accumsan urna viverra aenean conubia? Est iaculis felis accumsan ligula ut maecenas. Maecenas consequat nullam nascetur sapien penatibus nibh. Ante cubilia ridiculus sapien nunc fringilla euismod vestibulum velit. Erat mi dictum integer; est lectus justo.` },
    ],
    options: ['pink', 'violet', 'red', 'green', 'blue']
  },
  {
    id: 4,
    type: 'mcq-multi',
    prompts: [
      {
        type: 'text', content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Dui malesuada efficitur hac eget egestas bibendum class. Sociosqu pretium duis turpis eleifend ultrices dolor feugiat. Cubilia nascetur vitae amet placerat rutrum nostra. Scelerisque curae sit parturient cubilia auctor volutpat. Id maximus sem nisl curae nulla laoreet torquent nullam pellentesque. Dignissim suscipit sodales iaculis non praesent. Potenti platea cubilia senectus commodo hendrerit vivamus sociosqu.

Mollis elit justo molestie; auctor rutrum porta vitae. Rhoncus metus porta posuere luctus iaculis fermentum. Ut luctus taciti scelerisque nec pharetra eu; amet convallis curae. Sociosqu faucibus nisi est amet rutrum cursus cubilia nostra auctor. Nullam litora volutpat ex malesuada magnis malesuada. Velit massa massa senectus montes dapibus vestibulum. Sed lorem ac semper dapibus ac lacinia penatibus.

Faucibus ultricies hac etiam venenatis morbi a taciti phasellus. Eget parturient nec nunc viverra; taciti tincidunt dictumst blandit. Odio vivamus finibus metus condimentum duis conubia semper platea pretium. Tincidunt dolor mattis penatibus erat porta ornare sollicitudin. Eu potenti nibh fringilla augue; dignissim aptent. Convallis ipsum non euismod, rhoncus ligula quam. Primis commodo pharetra nunc; egestas morbi sagittis.

Potenti praesent feugiat accumsan faucibus commodo congue. Convallis viverra ultricies fames parturient; bibendum tincidunt pretium sem felis. Adipiscing ante facilisis habitant turpis condimentum. Non mattis pellentesque pharetra vulputate massa placerat. Justo tristique inceptos leo dui mi lobortis inceptos. Fringilla enim nisl turpis ridiculus rhoncus leo arcu feugiat posuere. Et praesent mauris mauris mus euismod maximus dignissim.` },
      {
        type: 'table',
        content: {
          th: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          td: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10], [11, 14, 15, 24, 45, 56, 12, 45, 89, 56, 34, 56]]
        }
      },
    ],
    options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    id: 5,
    type: 'end',
    prompts: [
      { type: 'text', content: 'Thank you for taking the survey' },
    ],
  },
];
