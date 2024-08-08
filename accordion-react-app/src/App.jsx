import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";
import Place from "./components/Places";
import SearchableList from "./components/SearchableList/SearchableList";
import { PLACES } from "./utils/places";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            className="accordion-item"
            id="experience"
          >
            <Accordion.Title className="accordion-item-title"  >20 years of great experience</Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>You can&apos;t go wrong with us</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, placeat libero asperiores vel accusamus fugiat at
                  laboriosam neque ipsam sapiente adipisci ullam debitis aliquam
                  id officiis minima eveniet iusto deserunt? Perspiciatis
                  laudantium ex eligendi possimus ipsa explicabo iste? Commodi
                  eveniet libero cumque corporis culpa, quidem nostrum sed,
                  doloremque beatae illo repudiandae eaque optio. Necessitatibus
                  rem iste non odit, distinctio quaerat? Reiciendis explicabo
                  est unde et nobis repellat repudiandae vitae odit assumenda
                  nostrum incidunt magnam, eius aliquam sint ipsam praesentium
                  illum adipisci? Vitae incidunt animi odio doloribus enim
                  repudiandae. Harum, laudantium.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            className="accordion-item"
            id="partners"
          >
            <Accordion.Title className="accordion-item-title"  >Amazing reach</Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>We have global partners</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, placeat libero asperiores vel accusamus fugiat at
                  laboriosam neque ipsam sapiente adipisci ullam debitis aliquam
                  id officiis minima eveniet iusto deserunt? Perspiciatis
                  laudantium ex eligendi possimus ipsa explicabo iste? Commodi
                  eveniet libero cumque corporis culpa, quidem nostrum sed,
                  doloremque beatae illo repudiandae eaque optio. Necessitatibus
                  rem iste non odit, distinctio quaerat? Reiciendis explicabo
                  est unde et nobis repellat repudiandae vitae odit assumenda
                  nostrum incidunt magnam, eius aliquam sint ipsam praesentium
                  illum adipisci? Vitae incidunt animi odio doloribus enim
                  repudiandae. Harum, laudantium.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} keyFunc={(item) => item.id }>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={['item1', 'item2']} keyFunc={(item) => item}>
        {(item) =>  item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
