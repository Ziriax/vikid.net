import { MethodId, AdjusterMethodId, ReceiverMethodId } from "language";
import { methodDescriptions, methodDescriptor, adjusterDescriptor, overloadDescriptor } from "locale/MethodDescription";

export const methods = methodDescriptions({
  [AdjusterMethodId.Instance]: adjusterDescriptor("één aangepaste instantie", "…aanpassingen"),
  [AdjusterMethodId.Population]: adjusterDescriptor("meerdere aangepaste instanties", "…aanpassingen", "hoeveel initieel", "hoeveel erbij", "actief?"),
  [AdjusterMethodId.Switcher]: adjusterDescriptor("geschakelde aangepaste instantie", "…aanpassingen", "actief?", "tijdschaal"),
  [AdjusterMethodId.Simulator]: adjusterDescriptor("geluste aangepaste instantie", "…aanpassingen", "actief?", "tijdstap"),

  [ReceiverMethodId.Track]: methodDescriptor("ontvang bericht", "spoor"),

  [MethodId.ADD]: {
    "𝕍": overloadDescriptor("plus", "vector", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Optellen_van_vectoren"),
    _: overloadDescriptor("plus", "waarde", "https://en.wikipedia.org/wiki/Addition"),
  },
  [MethodId.SUB]: {
    "ℝ": overloadDescriptor("min", "aantal", "https://wikikids.nl/Aftrekken"),
    "𝕍": overloadDescriptor("min", "vector", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Verschil_van_vectoren"),
  },
  [MethodId.MUL]: {
    "ℝ": overloadDescriptor("maal", "factor", "https://wikikids.nl/Vermenigvuldigen"),
    "𝕍": overloadDescriptor("maal", "factor", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
    "𝕋": overloadDescriptor("samengesteld met", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  },
  [MethodId.DIV]: {
    "ℝ": overloadDescriptor("gedeeld door", "noemer", "https://wikikids.nl/Delen"),
    "𝕍": overloadDescriptor("gedeeld door", "factor", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
  },
  [MethodId.NEG]: {
    "ℝ": overloadDescriptor("tegengesteld", "https://wikikids.nl/Negatief_getal#Tegengestelde"),
    "𝕍": overloadDescriptor("tegengesteld", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
  },
  [MethodId.INVERT]: {
    "ℝ": overloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Inverse#Inverse_van_een_getal_of_variabele"),
    "𝕋": overloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Inverse#Inverse_transformatie"),
    "𝕂": overloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Complementaire_kleur"),
    "𝔾": overloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Complement_(verzamelingenleer)"),
  },
  [MethodId.MOD]: methodDescriptor("positieve rest", "noemer", "https://nl.wikipedia.org/wiki/Rest"),
  [MethodId.SIN]: methodDescriptor("sinus", "https://nl.wikipedia.org/wiki/Sinus_en_cosinus"),
  [MethodId.COS]: methodDescriptor("cosinus", "https://nl.wikipedia.org/wiki/Sinus_en_cosinus"),
  [MethodId.TAN]: methodDescriptor("tangens", "https://nl.wikipedia.org/wiki/Tangens_en_cotangens"),
  [MethodId.ASIN]: methodDescriptor("arcsinus", "https://nl.wikipedia.org/wiki/Arcsinus"),
  [MethodId.ACOS]: methodDescriptor("arccosinus", "https://nl.wikipedia.org/wiki/Arccosinus"),
  [MethodId.ATAN2]: methodDescriptor("arctangens", "x", "https://nl.wikipedia.org/wiki/Arctangens#De_functie_Arctan2"),
  [MethodId.ASIN]: methodDescriptor("boogsinus", "https://nl.wikipedia.org/wiki/Arcsinus"),
  [MethodId.ACOS]: methodDescriptor("boogcosinus", "https://nl.wikipedia.org/wiki/Arccosinus"),
  [MethodId.ABS]: {
    "ℝ": overloadDescriptor("absolute waarde", "https://wikikids.nl/Absolute_waarde"),
    "𝕍": overloadDescriptor("lengte", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Norm_van_een_vector"),
  },
  [MethodId.EXP]: methodDescriptor("exponentiële functie", "https://nl.wikipedia.org/wiki/Exponenti%C3%ABle_functie"),
  [MethodId.LOG]: methodDescriptor("natuurlijk logaritme", "https://nl.wikipedia.org/wiki/Natuurlijke_logaritme"),
  [MethodId.POW]: methodDescriptor("tot de macht", "getal", "https://wikikids.nl/Machtsverheffing"),
  [MethodId.RANDOM_NUMBER]: methodDescriptor("willekeurig getal", "van", "tot"),
  [MethodId.PSEUDO_RANDOM_NUMBER]: methodDescriptor("willekeurige getal met seed", "van", "tot", "seed"),
  [MethodId.FLOOR]: methodDescriptor("afgerond naar beneden", "https://wikikids.nl/Afronden"),
  [MethodId.CEIL]: methodDescriptor("afgerond naar boven", "https://wikikids.nl/Afronden"),
  [MethodId.ROUND]: methodDescriptor("afgerond", "https://wikikids.nl/Afronden"),
  [MethodId.MIN]: methodDescriptor("kleinste", "getal", "https://nl.wikipedia.org/wiki/Totale_orde#Minimum_en_maximum"),
  [MethodId.MAX]: methodDescriptor("grootste", "getal", "https://nl.wikipedia.org/wiki/Totale_orde#Minimum_en_maximum"),
  [MethodId.LERP]: methodDescriptor("interpoleer naar", "einde", "factor", "https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support"),
  [MethodId.SIGN]: methodDescriptor("toestandsteken"),
  [MethodId.SQRT]: methodDescriptor("vierkantswortel", "https://nl.wikipedia.org/wiki/vierkantswortel"),

  /** Boolean operators */
  [MethodId.EQU]: methodDescriptor("is gelijk aan", "waarde", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.NEQ]: methodDescriptor("is niet gelijk aan", "waarde", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.GT]: methodDescriptor("is groter dan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.GTE]: methodDescriptor("is groter of gelijk aan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.LT]: methodDescriptor("is kleiner dan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.LTE]: methodDescriptor("is kleiner of gelijk aan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.AND]: {
    "𝔹": overloadDescriptor("en", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#AND"),
    "ℝ": overloadDescriptor("bitwise AND", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#AND"),
  },
  [MethodId.OR]: {
    "𝔹": overloadDescriptor("of", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#OR"),
    "ℝ": overloadDescriptor("bitwise OR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#OR"),
  },
  [MethodId.XOR]: {
    "𝔹": overloadDescriptor("exclusieve of", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#XOR_(%22eXclusive_OR%22)"),
    "ℝ": overloadDescriptor("bitwise XOR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"),
  },
  [MethodId.NOT]: {
    "𝔹": overloadDescriptor("niet", "https://nl.wikipedia.org/wiki/Booleaanse_operator#NOT"),
    "ℝ": overloadDescriptor("bitwise NOT", "https://en.wikipedia.org/wiki/Bitwise_operation#NOT"),
  },

  [MethodId.EQU_EMPTY_SHAPE]: methodDescriptor("is bij benadering leeg?"),

  /* Conditional operators **/
  [MethodId.ITE]: methodDescriptor("als", "boolean", "anders", "https://en.wikipedia.org/wiki/%3F:#Python"),

  /** Stateful operators */
  [MethodId.INTEGRAL]: methodDescriptor("plus integraal over tijd", "snelheid", "https://nl.wikipedia.org/wiki/Kinematica#Integralen"),
  [MethodId.DERIVATIVE]: methodDescriptor("afgeleide naar tijd", "active?", "https://nl.wikipedia.org/wiki/Kinematica#Snelheid"),
  [MethodId.CLAMPED_INTEGRAL]: methodDescriptor("plus integraal over tijd, begrensd", "minimum", "maximum", "snelheid", "https://nl.wikipedia.org/wiki/Kinematica#Integralen"),

  /** Event operators */
  [MethodId.WHEN]: methodDescriptor("neem waarde bij", "update", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.TIMER]: methodDescriptor("na", "seconden", "herhalen?", "http://reactivex.io/documentation/operators/timer.html"),
  [MethodId.RISING]: methodDescriptor("aantal stijgende flanken", "https://nl.wikipedia.org/wiki/Flank_(elektrisch)"),
  [MethodId.CALM]: methodDescriptor("stop updates met dezelfde waarde", "ondiep?", "https://rxmarbles.com/#distinctUntilChanged"),
  [MethodId.TAKE]: methodDescriptor("neem enkel eerste updates", "aantal", "http://reactivex.io/documentation/operators/take.html"),
  [MethodId.SKIP]: methodDescriptor("sla eerste updates over", "aantal", "http://reactivex.io/documentation/operators/skip.html"),
  [MethodId.BUFFER]: methodDescriptor("buffer updates", "hoeveel [@<0 ⇒ aantal=-@ | @>0 ⇒ tijdspanne=@seconden], vertraagd?, actief?", "http://reactivex.io/documentation/operators/buffer.html"),
  [MethodId.FILTER]: methodDescriptor("filter updates", "doorlaten?", "http://reactivex.io/documentation/operators/filter.html"),
  [MethodId.SNAPSHOT]: methodDescriptor("bij update, neem", "waarde", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.ASAP]: methodDescriptor("zo snel mogelijk", "maximum intra-frame updates"),
  [MethodId.MERGE]: methodDescriptor("gecombineerd met", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_LEFT]: methodDescriptor("initialiseer en combineer met", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_BOTH]: methodDescriptor("gecombineerd met", "simultaan", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.VSYNC]: methodDescriptor("zodra getoond op het scherm", "active?"),

  /** Transformation operators */
  [MethodId.TRANSLATE_V]: methodDescriptor("verschoven", "vector", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)"),
  [MethodId.TRANSLATE_X]: methodDescriptor("verschoven", "horizontaal", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)"),
  [MethodId.TRANSLATE_Y]: methodDescriptor("verschoven", "verticaal", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)"),
  [MethodId.ROTATE]: methodDescriptor("gedraaid", "uren", "https://nl.wikipedia.org/wiki/Rotatie_(meetkunde)"),
  [MethodId.SCALE]: methodDescriptor("geschaald", "factor", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.SCALE_V]: methodDescriptor("geschaald", "factoren", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.SCALE_X]: methodDescriptor("geschaald", "horizontaal", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.SCALE_Y]: methodDescriptor("geschaald", "verticaal", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.PIXEL_SNAP]: methodDescriptor("uitgelijnd op pixels", "origin?", "x axis?", "y axis?", "https://en.wikipedia.org/wiki/Snap_(computer_graphics)"),

  /** Graphics operators */
  [MethodId.PAINT_SOLID]: methodDescriptor("geverfd in", "kleur"),
  [MethodId.PAINT_LINEAR]: methodDescriptor("geverfd in", "start kleur", "eind kleur", "start punt", "eind punt"),
  [MethodId.OVERLAY]: {
    "[𝔾]": overloadDescriptor("op elkaar gestapeld"),
    _: overloadDescriptor("over", "vorm"),
  },
  [MethodId.UNDERLAY]: {
    "[𝔾]": overloadDescriptor("onder elkaar gestapeld"),
    _: overloadDescriptor("onder", "vorm"),
  },
  [MethodId.INTERSECTION]: methodDescriptor("doorsnede met", "vorm", "https://nl.wikipedia.org/wiki/Doorsnede_(verzamelingenleer)"),
  [MethodId.EXCLUSION]: methodDescriptor("uitgesneden met", "vorm", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)#Relatief_complement"),
  [MethodId.PLOT_GRAPH]: methodDescriptor("grafiek over tijd", "dikte", "afwijking", "maximum #points [@<0 ⇒ ∞)", "https://nl.wikipedia.org/wiki/Grafiek_(wiskunde]"),
  [MethodId.CLONE]: methodDescriptor("gekopieerd", "aantal", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  [MethodId.TRANSFORM]: methodDescriptor("getransformeerd met", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  [MethodId.PLOT_POINTS]: methodDescriptor("updates over tijd", "dikte", "afwijking", "maximum #points [@<0 ⇒ ∞)", "https://nl.wikipedia.org/wiki/Grafiek_(wiskunde]"),
  [MethodId.TRANSPARENTIZE]: methodDescriptor("doorschijnend", "factor", "https://nl.wikipedia.org/wiki/Alfakanaal"),
  [MethodId.FILLED]: {
    "𝕍": overloadDescriptor("als vorm", "dikte"),
    "𝕊": overloadDescriptor("als vorm", "horizontale tekstuitlijning", "verticale tekstuitlijning", "regelafstand"),
    _: overloadDescriptor("als vorm", "kleur"),
  },
  [MethodId.CONTAINS_POINT]: methodDescriptor("bevat punt?", "punt"),
  [MethodId.RENDER]: methodDescriptor("render als bitmap", "breedte [pixels]", "hoogte [pixels]", "geïnterpoleerd?"),
  [MethodId.COMPOSE]: methodDescriptor("compositie", "operator", "voorgrond", "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"),

  /** Vector operators */
  [MethodId.HOR]:
  {
    "𝕋": overloadDescriptor("rode basis vector", "https://nl.wikipedia.org/wiki/Basis_(lineaire_algebra)"),
    _: overloadDescriptor("horizontale coördinaat", "https://nl.wikipedia.org/wiki/Co%C3%B6rdinaat"),
  },
  [MethodId.VER]: {
    "𝕋": overloadDescriptor("groene basis vector", "https://nl.wikipedia.org/wiki/Basis_(lineaire_algebra)"),
    _: overloadDescriptor("verticale coördinaat", "https://nl.wikipedia.org/wiki/Co%C3%B6rdinaat"),
  },
  [MethodId.WEIGHT]: methodDescriptor("w coördinaat", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.ORIG]: {
    "𝕋": overloadDescriptor("gele oorsprong", "https://nl.wikipedia.org/wiki/Oorsprong_(wiskunde)"),
  },
  [MethodId.POST_TRANSFORMS]: methodDescriptor("transformaties na gelabelde vorm", "https://en.wikipedia.org/wiki/Graphics_pipeline#The_World_Coordinate_System"),

  [MethodId.DOT]: methodDescriptor("inwendig product met", "vector", "https://nl.wikipedia.org/wiki/Inwendig_product"),
  [MethodId.DET]: methodDescriptor("determinant met", "vector", "https://nl.wikipedia.org/wiki/Determinant"),
  [MethodId.REFLECT]: methodDescriptor("gespiegeld om", "richting", "https://nl.wikipedia.org/wiki/Spiegeling_(meetkunde)"),
  [MethodId.ANGLE]: methodDescriptor("angle between", "vector", "radians?", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Inwendig_product"),
  [MethodId.TOWARDS]: methodDescriptor("in de richting van", "vector"),
  [MethodId.CARTESIAN]: methodDescriptor("to Euclidean point or vector", "https://nl.wikipedia.org/wiki/Projectieve_ruimte"),
  [MethodId.NORMALIZE]: methodDescriptor("normalized", "https://en.wikipedia.org/wiki/Unit_vector"),
  [MethodId.CROSS]: methodDescriptor("3D uitwendig product met", "vector", "https://nl.wikipedia.org/wiki/Kruisproduct"),

  [MethodId.BOUNDING_POINT]: methodDescriptor("punt in AABB", "Barycentrische coördinaten", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_WIDTH]: methodDescriptor("breedte van AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_HEIGHT]: methodDescriptor("hoogte van AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),

  [MethodId.HIT_TEST]: methodDescriptor("raakt?", "met label", "zonder label", "actief?", "maximum diepte"),
  [MethodId.RAY_CAST]: methodDescriptor("aangeraakte waarden", "met label", "zonder label", "actief?"),
  [MethodId.HIT_REGION]: methodDescriptor("aanraakbaar", "label", "waarde"),

  [MethodId.CULL]: methodDescriptor("cull", "active?", "https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling"),

  // [MethodId.PROJECT]: "",
  // [MethodId.REJECT]: "",

  /** Puzzle methods */
  [MethodId.EXTRA]: methodDescriptor("extra", "waarde"),
  [MethodId.PUZZLE]: methodDescriptor("puzzle", "soort [@=1 ⇒ vaste blokken, @2 ⇒ vrij instellen]"),
  [MethodId.OUTLINE]: methodDescriptor("outlines", "aan?"),
  [MethodId.CORRECT]: methodDescriptor("corrigeer", "toon?", "foute waarde"),
  [MethodId.PREMADE]: methodDescriptor("voorgemaakt", "sla over?"),
  [MethodId.SELECT]: methodDescriptor("geselecteerd", "functie?"),
  [MethodId.IGNORE]: methodDescriptor("genegeerd"),
  [MethodId.CYCLIC]: methodDescriptor("animatie cyclus", "duurtijd"),
  [MethodId.FEEDBACK]: methodDescriptor("feedback", "toon?", "initiële waarde", "recursieve verwijzing"),
  [MethodId.ACTUATOR]: methodDescriptor("actuator", "welke [@=0 ⇒ uit | @=1 ⇒ oog | @=oor]", "actuator verwijzing"),

  /** Drawing methods */
  [MethodId.MOVE_TO]: methodDescriptor("beweeg naar", "start punt", "https://www.w3schools.com/tags/canvas_moveto.asp"),
  [MethodId.LINE_TO]: methodDescriptor("teken lijn naar", "eind punt", "https://www.w3schools.com/tags/canvas_lineto.asp"),
  [MethodId.QUAD_TO]: methodDescriptor("teken kwadratische curve naar", "eind punt", "controlepunt", "https://www.w3schools.com/tags/canvas_quadraticcurveto.asp"),
  [MethodId.CUBIC_TO]: methodDescriptor("teken kubische curve naar", "eind punt", "eerste controlepunt", "tweede controlepunt", "https://www.w3schools.com/tags/canvas_beziercurveto.asp"),
  [MethodId.LAST_POINT]: methodDescriptor("eindpunt"),
  // [MethodId.ARC_TO]: MethodDescriptor("teken cirkelboog naar", "start richting", "eind punt", "straal", "https://www.w3schools.com/tags/canvas_arcto.asp"),
  [MethodId.GET_POINTS]: methodDescriptor("lijst van punten", "enkel hoekpunten?"),

  [MethodId.STROKE]: {
    "𝔽": overloadDescriptor("getekend", "kleur", "dikte", "ronde hoeken?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
    _: overloadDescriptor("getekend", "kleur", "dikte", "gesloten?", "ronde hoeken?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
  },

  /** Factory methods */
  // [MethodId.NEW_BINDING]: "",
  [MethodId.VECTOR_2D]: methodDescriptor("vector", "x coördinaat", "y coördinaat", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)"),
  [MethodId.POINT_2D]: methodDescriptor("point", "x coördinaat", "y coördinaat", "https://nl.wikipedia.org/wiki/Punt_(wiskunde)"),
  [MethodId.HOMOGENEOUS_2D]: methodDescriptor("punt of vector", "x coördinaat", "y coördinaat", "w coördinaat", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.MATRIX_2D]: methodDescriptor("transformatie", "x richting", "y richting", "oorsprong", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  [MethodId.COLOR_RGB]: methodDescriptor("kleur", "rood", "groen", "blauw", "https://nl.wikipedia.org/wiki/RGB-kleursysteem"),
  [MethodId.COLOR_HSL]: methodDescriptor("kleur", "tint", "verzadiging", "helderheid", "perceptueel?", "https://nl.wikipedia.org/wiki/HSL_(kleurruimte)"),
  [MethodId.SHAPE_NGON]: methodDescriptor("regelmatige veelhoek", "aantal hoeken", "https://nl.wikipedia.org/wiki/Regelmatige_veelhoek"),
  [MethodId.GAMEPAD_SWITCH]: methodDescriptor("gamepad schakelaar", "welke schakelaar", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_NUMBER]: methodDescriptor("gamepad drukknop", "welke drukknop", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_VECTOR]: methodDescriptor("gamepad richting", "welke richting", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.FIGURE_LINE]: methodDescriptor("lijnstuk", "startpunt", "endpunt", "https://nl.wikipedia.org/wiki/Lijnstuk"),
  [MethodId.FIGURE_RECT]: methodDescriptor("rechthoek", "breedte", "hoogte", "afgeronden hoeken", "middelpunt", "https://nl.wikipedia.org/wiki/Rechthoek"),
  [MethodId.FIGURE_CIRCLE]: methodDescriptor("cirkel", "straal", "middelpunt", "https://nl.wikipedia.org/wiki/Cirkel"),
  [MethodId.FIGURE_ELLIPSE]: methodDescriptor("ellips", "breedte", "hoogte", "middelpunt", "rotatie", "starthoek", "eindhoek", "andersom", "https://nl.wikipedia.org/wiki/Ellips_(wiskunde)"),
  [MethodId.DRAWING_PATH]: methodDescriptor("lijntekening", "startpunt", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.BITMAP_IMAGE]: methodDescriptor("externe sprite", "URI", "geïnterpoleerd?", "hoogte", "https://nl.wikipedia.org/wiki/Sprite_(computer)"),
  [MethodId.EMPTY_LIST]: methodDescriptor("lege rij", "type", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.NUMERIC_RANGE]: methodDescriptor("getallenrij", "start", "stap", "aantal", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.MOUSE_BUTTON]: methodDescriptor("muis knop tracker", "welke knop [@=0 ⇒ eender]", "ook aanraakscherm?"),
  [MethodId.MOUSE_POSITION]: methodDescriptor("muis positie tracker", "ook zwevend?", "ook aanraakscherm?"),
  [MethodId.TOUCH_TRACKER]: methodDescriptor("multi-touch tracker"),
  [MethodId.TOUCH_DOWN]: methodDescriptor("touch down tracker", "welke touch"),
  [MethodId.TOUCH_POSITION]: methodDescriptor("touch positie tracker", "welke touch"),
  [MethodId.KEY_TRACKER]: methodDescriptor("toetsenbord aanslag tracker [enkel in volledige scherm modus]", "code", "debug", "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#try_it_out"),
  [MethodId.UNIQUE_ID]: methodDescriptor("unieke code"),
  [MethodId.SOUND_STREAM]: methodDescriptor("gestreamd geluids bestand", "getal of URI"),
  [MethodId.SOUND_BUFFER]: methodDescriptor("gebufferd geluids bestand", "getal of URI"),
  [MethodId.PIXELS_PER_UNIT]: methodDescriptor("screen pixels per ViKiD unit"),
  // [MethodId.NEW_MICROPHONE]: MethodDescriptor("microfoon geluidsbron"),
  [MethodId.EMPTY_SET]: methodDescriptor("lege verzameling", "type", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
  [MethodId.EMPTY_MAP]: methodDescriptor("lege map [associatieve array]", "type", "https://nl.wikipedia.org/wiki/Associatieve_array"),

  /** List methods */
  [MethodId.APPEND]: methodDescriptor("toegevoegd", "element", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.INSERT]: methodDescriptor("ingevoegd", "index of indices", "element(en)", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.CONCAT]: methodDescriptor("samengevoegd", "elementen", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.SLICE]: methodDescriptor("uitgesneden", "index", "aantal", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.REMOVE]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescriptor("verwijder", "sleutel", "https://nl.wikipedia.org/wiki/Associatieve_array"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescriptor("verwijder", "sleutel", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
    _: overloadDescriptor("verwijder", "index", "count", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.LENGTH]: methodDescriptor("aantal elementen", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.ITEM]: methodDescriptor("element(en)", "index of indices of condities", "wrap?", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.SEARCH]: methodDescriptor("indices van", "element(en)", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.CONTAINS]: methodDescriptor("bevat", "element(en)", "https://nl.wikipedia.org/wiki/Element_(wiskunde)"),
  [MethodId.REPLACE]: methodDescriptor("vervang element", "index", "element", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.REVERSE]: methodDescriptor("omgekeerd", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.SUM]: methodDescriptor("sommatie", "nul als leeg?", "https://nl.wikipedia.org/wiki/Sommatie"),
  [MethodId.PRODUCT]: methodDescriptor("product", "één als leeg?", "https://nl.wikipedia.org/wiki/Vermenigvuldigen#Notatie_en_terminologie"),
  [MethodId.FLATTEN]: methodDescriptor("afgevlakt", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"),
  // [MethodId.TRIM]: MethodDescriptor("trim elementen", "welke [@>0 ⇒ met stamp=@ | @≤0 ⇒ zonder stamp=-@]", "update als leeg?"),
  [MethodId.FILL]: methodDescriptor("gevuld met", "waarde", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.ORDER]: methodDescriptor("indices van geordende elementen", "aflopend?"),
  [MethodId.REPEAT]: methodDescriptor("herhaald als lijst", "aantal", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.TO_DRAWING]: methodDescriptor("als lijntekening", "startpunt", "losse segmenten?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.TO_SET]: methodDescriptor("als verzameling", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
  [MethodId.TO_MAP]: methodDescriptor("als map [associatieve array]", "https://nl.wikipedia.org/wiki/Associatieve_array"),
  [MethodId.TRANSPOSE]: methodDescriptor("getransponeerd", "https://nl.wikipedia.org/wiki/Getransponeerde_matrix"),

  [MethodId.PRINT]: {
    "𝔹": overloadDescriptor("als tekst"),
    "𝕂": overloadDescriptor("als tekst"),
    "𝕍": overloadDescriptor("als tekst", "cijfers na de komma"),
    "𝕋": overloadDescriptor("als tekst", "cijfers na de komma"),
    "ℝ": overloadDescriptor("als tekst", "cijfers na de komma"),
  },

  [MethodId.CASE]: methodDescriptor("letters", "mode [@<0 ⇒ kleine letters | @>0 ⇒ hoofdletters]", "https://nl.wikipedia.org/wiki/Onderkast"),
  [MethodId.JOIN]: methodDescriptor("samengevoegd", "scheidingsteken"),
  [MethodId.FORMAT]: methodDescriptor("formatteer naar tekst", "formaat", "indentatie"),
  [MethodId.PARSE]: methodDescriptor("ontleed tekst", "formaat", "type"),
  [MethodId.PROMPT]: methodDescriptor("vraag de gebruiker om tekst in te voeren", "standaard invoer", "open!"),
  [MethodId.ALERT]: methodDescriptor("waarschuw de gebruiker", "open!"),
  [MethodId.CONFIRM]: methodDescriptor("vraag de gebruiker om te bevestigen", "open!"),
  [MethodId.BROWSE]: methodDescriptor("open als HTML pagina in de browser", "open!"),

  [MethodId.PAD]: methodDescriptor("opgevuld met", "waarde", "lengte", "achteraan?"),

  [MethodId.INDEX]: methodDescriptor("instantie index", "welke [@=0 ⇒ serie_nummer | @=1 ⇒ lot_index  | @=2 ⇒ instantie_id]"),

  [MethodId.GET_STAMP]: methodDescriptor("vraag tijdstempel op"),
  [MethodId.SET_STAMP]: methodDescriptor("wijzig tijdstempel", "nieuwe tijdstempel"),

  [MethodId.PLAY_SOUND]: methodDescriptor("speel geluid", "aan?", "tempo"),
  [MethodId.SET_VOLUME]: methodDescriptor("met volume", "waarde"),
  // [MethodId.ANALYSE_AUDIO]: MethodDescriptor("speel en analyseer geluid", "Fast Fourier Transform size", "minimum Decibels", "maximum Decibels", "smoothing time constant", "actief?", "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"),
  [MethodId.LOOP_SOUND]: {
    "💥": overloadDescriptor("loop geluid", "actief?", "starttijd", "duurtijd", "https://nl.wikipedia.org/wiki/Loop_(geluid)"),
    "🎶": overloadDescriptor("loop geluid", "actief?", "https://nl.wikipedia.org/wiki/Loop_(geluid)"),
  },
  [MethodId.SLICE_SOUND]: methodDescriptor("uitgesneden geluid", "starttijd", "duurtijd"),
  [MethodId.IS_PLAYING]: methodDescriptor("wordt afgespeeld?"),
  [MethodId.ADD_AUDIO]: methodDescriptor("plus", "audio"),
  [MethodId.SUM_AUDIO]: methodDescriptor("som"),

  [MethodId.LOCAL_STORAGE]: methodDescriptor("bij update, sla op", "sleutel", "laad!", "actief?"),
  [MethodId.DEBUG_PRINT]: methodDescriptor("print naar debug console", "prefix", "actief?"),
  [MethodId.DEBUG_PAUSE]: methodDescriptor("bij update, pauzeer de klok", "update", "actief?"),
  [MethodId.DEBUG_PAUSE]: methodDescriptor("breakpoint", "actief?"),

  [MethodId.SATELLITE]: methodDescriptor("satelliet", "type"),
  [MethodId.SEND]: methodDescriptor("verstuur", "bericht", "aantal"),
  [MethodId.RECEIVE]: methodDescriptor("ontvang berichten", "leeg?", "asap"),

  [MethodId.TUPLE_2]: methodDescriptor("koppel", "element 0", "element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.TUPLE_3]: methodDescriptor("tripel", "element 0", "element 1", "element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.TUPLE_4]: methodDescriptor("quadrupel", "element 0", "element 1", "element 2", "element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.GET_ELEMENT_0]: methodDescriptor("neem element 0", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.GET_ELEMENT_1]: methodDescriptor("neem element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.GET_ELEMENT_2]: methodDescriptor("neem element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.GET_ELEMENT_3]: methodDescriptor("neem element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.TO_LIST]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescriptor("neem alle elementen", "sortering"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescriptor("neem alle elementen", "sortering"),
    _: overloadDescriptor("neem alle elementen", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  },

  [MethodId.WITH_ELEMENT_0]: methodDescriptor("vervang element 0", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.WITH_ELEMENT_1]: methodDescriptor("vervang element 1", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.WITH_ELEMENT_2]: methodDescriptor("vervang element 2", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.WITH_ELEMENT_3]: methodDescriptor("vervang element 3", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.SET_UNION]: methodDescriptor("unie met", "verzameling", "https://nl.wikipedia.org/wiki/Vereniging_(verzamelingenleer)"),
  [MethodId.SET_INTERSECTION]: methodDescriptor("doorsnede met", "verzameling", "https://nl.wikipedia.org/wiki/Doorsnede_(verzamelingenleer)"),
  [MethodId.SET_DIFFERENCE]: methodDescriptor("verschil met", "verzameling", "https://nl.wikipedia.org/wiki/Complement_(verzamelingenleer)"),
  [MethodId.SET_SYMMETRIC_DIFFERENCE]: methodDescriptor("symmetrisch verschil met", "verzameling", "https://nl.wikipedia.org/wiki/Symmetrisch_verschil"),
});
