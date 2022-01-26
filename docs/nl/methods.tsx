import { MethodId, PrimitiveKind, AdjusterMethodId, ReceiverMethodId, makeListKindKey } from "language";
import { MethodDescriptions, MethodDescriptor, AdjusterDescriptor, anyInputKind, OverloadDescriptor } from "locale/MethodDescription";

export const methods: MethodDescriptions = {
  [AdjusterMethodId.Instance]: AdjusterDescriptor("één aangepaste instantie", "aanpassingen"),
  [AdjusterMethodId.Population]: AdjusterDescriptor("meerdere aangepaste instanties", "aanpassingen", "hoeveel initieel", "hoeveel erbij", "actief?"),
  [AdjusterMethodId.Switcher]: AdjusterDescriptor("geschakelde aangepaste instantie", "aanpassingen", "actief?", "tijdschaal"),
  [AdjusterMethodId.Simulator]: AdjusterDescriptor("geluste aangepaste instantie", "adjustments", "active?", "tijdstap"),

  [ReceiverMethodId.Track]: MethodDescriptor("ontvang bericht", "spoor"),

  [MethodId.ADD]: {
    [PrimitiveKind.Vector]: OverloadDescriptor("plus", "vector", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Optellen_van_vectoren"),
    [anyInputKind]: OverloadDescriptor("plus", "waarde", "https://en.wikipedia.org/wiki/Addition"),
  },
  [MethodId.SUB]: {
    [PrimitiveKind.Number]: OverloadDescriptor("min", "aantal", "https://wikikids.nl/Aftrekken"),
    [PrimitiveKind.Vector]: OverloadDescriptor("min", "vector", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Verschil_van_vectoren"),
  },
  [MethodId.MUL]: {
    [PrimitiveKind.Number]: OverloadDescriptor("maal", "factor", "https://wikikids.nl/Vermenigvuldigen"),
    [PrimitiveKind.Vector]: OverloadDescriptor("maal", "factor", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("samengesteld met", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  },
  [MethodId.DIV]: {
    [PrimitiveKind.Number]: OverloadDescriptor("gedeeld door", "noemer", "https://wikikids.nl/Delen"),
    [PrimitiveKind.Vector]: OverloadDescriptor("gedeeld door", "factor", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
  },
  [MethodId.NEG]: {
    [PrimitiveKind.Number]: OverloadDescriptor("tegengesteld", "https://wikikids.nl/Negatief_getal#Tegengestelde"),
    [PrimitiveKind.Vector]: OverloadDescriptor("tegengesteld", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
  },
  [MethodId.INVERT]: {
    [PrimitiveKind.Number]: OverloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Inverse#Inverse_van_een_getal_of_variabele"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Inverse#Inverse_transformatie"),
    [PrimitiveKind.Color]: OverloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Complementaire_kleur"),
    [PrimitiveKind.Graphics]: OverloadDescriptor("inverse", "https://nl.wikipedia.org/wiki/Complement_(verzamelingenleer)"),
  },
  [MethodId.MOD]: MethodDescriptor("positieve rest", "noemer", "https://nl.wikipedia.org/wiki/Rest"),
  [MethodId.SIN]: MethodDescriptor("sinus", "https://nl.wikipedia.org/wiki/Sinus_en_cosinus"),
  [MethodId.COS]: MethodDescriptor("cosinus", "https://nl.wikipedia.org/wiki/Sinus_en_cosinus"),
  [MethodId.TAN]: MethodDescriptor("tangens", "https://nl.wikipedia.org/wiki/Tangens_en_cotangens"),
  [MethodId.ASIN]: MethodDescriptor("arcsinus", "https://nl.wikipedia.org/wiki/Arcsinus"),
  [MethodId.ACOS]: MethodDescriptor("arccosinus", "https://nl.wikipedia.org/wiki/Arccosinus"),
  [MethodId.ATAN2]: MethodDescriptor("arctangens", "x", "https://nl.wikipedia.org/wiki/Arctangens#De_functie_Arctan2"),
  [MethodId.ASIN]: MethodDescriptor("boogsinus", "https://nl.wikipedia.org/wiki/Arcsinus"),
  [MethodId.ACOS]: MethodDescriptor("boogcosinus", "https://nl.wikipedia.org/wiki/Arccosinus"),
  [MethodId.ABS]: {
    [PrimitiveKind.Number]: OverloadDescriptor("absolute waarde", "https://wikikids.nl/Absolute_waarde"),
    [PrimitiveKind.Vector]: OverloadDescriptor("lengte", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Norm_van_een_vector"),
  },
  [MethodId.EXP]: MethodDescriptor("exponentiële functie", "https://nl.wikipedia.org/wiki/Exponenti%C3%ABle_functie"),
  [MethodId.LOG]: MethodDescriptor("natuurlijk logaritme", "https://nl.wikipedia.org/wiki/Natuurlijke_logaritme"),
  [MethodId.POW]: MethodDescriptor("tot de macht", "getal", "https://wikikids.nl/Machtsverheffing"),
  [MethodId.RANDOM_NUMBER]: MethodDescriptor("willekeurig getal", "van", "tot"),
  [MethodId.PSEUDO_RANDOM_NUMBER]: MethodDescriptor("willekeurige getal met seed", "van", "tot", "seed"),
  [MethodId.FLOOR]: MethodDescriptor("afgerond naar beneden", "https://wikikids.nl/Afronden"),
  [MethodId.CEIL]: MethodDescriptor("afgerond naar boven", "https://wikikids.nl/Afronden"),
  [MethodId.ROUND]: MethodDescriptor("afgerond", "https://wikikids.nl/Afronden"),
  [MethodId.MIN]: MethodDescriptor("kleinste", "getal", "https://nl.wikipedia.org/wiki/Totale_orde#Minimum_en_maximum"),
  [MethodId.MAX]: MethodDescriptor("grootste", "getal", "https://nl.wikipedia.org/wiki/Totale_orde#Minimum_en_maximum"),
  [MethodId.LERP]: MethodDescriptor("interpoleer naar", "einde", "factor", "https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support"),
  [MethodId.SIGN]: MethodDescriptor("toestandsteken"),
  [MethodId.SQRT]: MethodDescriptor("vierkantswortel", "https://nl.wikipedia.org/wiki/vierkantswortel"),

  /** Boolean operators */
  [MethodId.EQU]: MethodDescriptor("is gelijk aan", "waarde", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.NEQ]: MethodDescriptor("is niet gelijk aan", "waarde", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.GT]: MethodDescriptor("is groter dan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.GTE]: MethodDescriptor("is groter of gelijk aan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.LT]: MethodDescriptor("is kleiner dan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.LTE]: MethodDescriptor("is kleiner of gelijk aan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)"),
  [MethodId.AND]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("en", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#AND"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise AND", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#AND"),
  },
  [MethodId.OR]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("of", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#OR"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise OR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#OR"),
  },
  [MethodId.XOR]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("exclusieve of", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#XOR_(%22eXclusive_OR%22)"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise XOR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"),
  },
  [MethodId.NOT]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("niet", "https://nl.wikipedia.org/wiki/Booleaanse_operator#NOT"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise NOT", "https://en.wikipedia.org/wiki/Bitwise_operation#NOT"),
  },

  [MethodId.EQU_EMPTY_SHAPE]: MethodDescriptor("is bij benadering leeg?"),

  /* Conditional operators **/
  [MethodId.ITE]: MethodDescriptor("als", "boolean", "anders", "https://en.wikipedia.org/wiki/%3F:#Python"),

  /** Stateful operators */
  [MethodId.INTEGRAL]: MethodDescriptor("plus integraal over tijd", "snelheid", "https://nl.wikipedia.org/wiki/Kinematica#Integralen"),
  [MethodId.DERIVATIVE]: MethodDescriptor("afgeleide naar tijd", "active?", "https://nl.wikipedia.org/wiki/Kinematica#Snelheid"),
  [MethodId.CLAMPED_INTEGRAL]: MethodDescriptor("plus integraal over tijd, begrensd", "minimum", "maximum", "snelheid", "https://nl.wikipedia.org/wiki/Kinematica#Integralen"),

  /** Event operators */
  [MethodId.WHEN]: MethodDescriptor("neem waarde bij", "update", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.TIMER]: MethodDescriptor("na", "seconden", "herhalen?", "http://reactivex.io/documentation/operators/timer.html"),
  [MethodId.RISING]: MethodDescriptor("aantal stijgende flanken", "https://nl.wikipedia.org/wiki/Flank_(elektrisch)"),
  [MethodId.CALM]: MethodDescriptor("stop updates met dezelfde waarde", "ondiep?", "https://rxmarbles.com/#distinctUntilChanged"),
  [MethodId.TAKE]: MethodDescriptor("neem enkel eerste updates", "aantal", "http://reactivex.io/documentation/operators/take.html"),
  [MethodId.SKIP]: MethodDescriptor("sla eerste updates over", "aantal", "http://reactivex.io/documentation/operators/skip.html"),
  [MethodId.BUFFER]: MethodDescriptor("buffer updates", "hoeveel (@<0 ⇒ aantal=-@ | @>0 ⇒ tijdspanne=@seconden), vertraagd?, actief?", "http://reactivex.io/documentation/operators/buffer.html"),
  [MethodId.FILTER]: MethodDescriptor("filter updates", "doorlaten?", "http://reactivex.io/documentation/operators/filter.html"),
  [MethodId.SNAPSHOT]: MethodDescriptor("bij update, neem", "waarde", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.ASAP]: MethodDescriptor("zo snel mogelijk", "maximum intra-frame updates"),
  [MethodId.MERGE]: MethodDescriptor("gecombineerd met", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_LEFT]: MethodDescriptor("initialiseer en combineer met", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_BOTH]: MethodDescriptor("gecombineerd met", "simultaan", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.VSYNC]: MethodDescriptor("zodra getoond op het scherm", "active?"),

  /** Transformation operators */
  [MethodId.TRANSLATE_V]: MethodDescriptor("verschoven", "vector", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)"),
  [MethodId.TRANSLATE_X]: MethodDescriptor("verschoven", "horizontaal", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)"),
  [MethodId.TRANSLATE_Y]: MethodDescriptor("verschoven", "verticaal", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)"),
  [MethodId.ROTATE]: MethodDescriptor("gedraaid", "uren", "https://nl.wikipedia.org/wiki/Rotatie_(meetkunde)"),
  [MethodId.SCALE]: MethodDescriptor("geschaald", "factor", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.SCALE_V]: MethodDescriptor("geschaald", "factoren", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.SCALE_X]: MethodDescriptor("geschaald", "horizontaal", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.SCALE_Y]: MethodDescriptor("geschaald", "verticaal", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)"),
  [MethodId.PIXEL_SNAP]: MethodDescriptor("uitgelijnd op pixels", "origin?", "x axis?", "y axis?", "https://en.wikipedia.org/wiki/Snap_(computer_graphics)"),

  /** Graphics operators */
  [MethodId.PAINT_SOLID]: MethodDescriptor("geverfd in", "kleur"),
  [MethodId.PAINT_LINEAR]: MethodDescriptor("geverfd in", "start kleur", "eind kleur", "start punt", "eind punt"),
  [MethodId.OVERLAY]: {
    [anyInputKind]: OverloadDescriptor("over", "vorm"),
    [makeListKindKey(PrimitiveKind.Graphics)]: OverloadDescriptor("op elkaar gestapeld"),
  },
  [MethodId.UNDERLAY]: {
    [anyInputKind]: OverloadDescriptor("onder", "vorm"),
    [makeListKindKey(PrimitiveKind.Graphics)]: OverloadDescriptor("onder elkaar gestapeld"),
  },
  [MethodId.INTERSECTION]: MethodDescriptor("doorsnede met", "vorm", "https://nl.wikipedia.org/wiki/Doorsnede_(verzamelingenleer)"),
  [MethodId.EXCLUSION]: MethodDescriptor("uitgesneden met", "vorm", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)#Relatief_complement"),
  [MethodId.PLOT_GRAPH]: MethodDescriptor("grafiek over tijd", "dikte", "afwijking", "maximum #points (@<0 ⇒ ∞)", "https://nl.wikipedia.org/wiki/Grafiek_(wiskunde)"),
  [MethodId.CLONE]: MethodDescriptor("gekopieerd", "aantal", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  [MethodId.TRANSFORM]: MethodDescriptor("getransformeerd met", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  [MethodId.PLOT_POINTS]: MethodDescriptor("updates over tijd", "dikte", "afwijking", "maximum #points (@<0 ⇒ ∞)", "https://nl.wikipedia.org/wiki/Grafiek_(wiskunde)"),
  [MethodId.TRANSPARENTIZE]: MethodDescriptor("doorschijnend", "factor", "https://nl.wikipedia.org/wiki/Alfakanaal"),
  [MethodId.FILLED]: {
    [anyInputKind]: OverloadDescriptor("als vorm", "kleur"),
    [PrimitiveKind.Vector]: OverloadDescriptor("als vorm", "dikte"),
    [PrimitiveKind.String]: OverloadDescriptor("als vorm", "horizontale tekstuitlijning", "verticale tekstuitlijning", "regelafstand"),
  },
  [MethodId.CONTAINS_POINT]: MethodDescriptor("bevat punt?", "punt"),
  [MethodId.RENDER]: MethodDescriptor("render als bitmap", "breedte (pixels)", "hoogte (pixels)", "geïnterpoleerd?"),
  [MethodId.COMPOSE]: MethodDescriptor("compositie", "operator", "voorgrond", "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"),

  /** Vector operators */
  [MethodId.HOR]:
  {
    [anyInputKind]: OverloadDescriptor("horizontale coördinaat", "https://nl.wikipedia.org/wiki/Co%C3%B6rdinaat"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("rode basis vector", "https://nl.wikipedia.org/wiki/Basis_(lineaire_algebra)"),
  },
  [MethodId.VER]: {
    [anyInputKind]: OverloadDescriptor("verticale coördinaat", "https://nl.wikipedia.org/wiki/Co%C3%B6rdinaat"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("groene basis vector", "https://nl.wikipedia.org/wiki/Basis_(lineaire_algebra)"),
  },
  [MethodId.WEIGHT]: MethodDescriptor("w coördinaat", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.ORIG]: {
    [PrimitiveKind.Matrix]: OverloadDescriptor("gele oorsprong", "https://nl.wikipedia.org/wiki/Oorsprong_(wiskunde)"),
  },
  [MethodId.POST_TRANSFORMS]: MethodDescriptor("transformaties na gelabelde vorm", "https://en.wikipedia.org/wiki/Graphics_pipeline#The_World_Coordinate_System"),

  [MethodId.DOT]: MethodDescriptor("inwendig product met", "vector", "https://nl.wikipedia.org/wiki/Inwendig_product"),
  [MethodId.DET]: MethodDescriptor("determinant met", "vector", "https://nl.wikipedia.org/wiki/Determinant"),
  [MethodId.REFLECT]: MethodDescriptor("gespiegeld om", "richting", "https://nl.wikipedia.org/wiki/Spiegeling_(meetkunde)"),
  [MethodId.ANGLE]: MethodDescriptor("angle between", "vector", "radians?", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Inwendig_product"),
  [MethodId.TOWARDS]: MethodDescriptor("in de richting van", "vector"),
  [MethodId.CARTESIAN]: MethodDescriptor("to Euclidean point or vector", "https://nl.wikipedia.org/wiki/Projectieve_ruimte"),
  [MethodId.NORMALIZE]: MethodDescriptor("normalized", "https://en.wikipedia.org/wiki/Unit_vector"),
  [MethodId.CROSS]: MethodDescriptor("3D uitwendig product met", "vector", "https://nl.wikipedia.org/wiki/Kruisproduct"),

  [MethodId.BOUNDING_POINT]: MethodDescriptor("punt in AABB", "Barycentrische coördinaten", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_WIDTH]: MethodDescriptor("breedte van AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_HEIGHT]: MethodDescriptor("hoogte van AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),

  [MethodId.HIT_TEST]: MethodDescriptor("raakt?", "met label", "zonder label", "actief?", "maximum diepte"),
  [MethodId.RAY_CAST]: MethodDescriptor("aangeraakte waarden", "met label", "zonder label", "actief?"),
  [MethodId.HIT_REGION]: MethodDescriptor("aanraakbaar", "label", "waarde"),

  [MethodId.CULL]: MethodDescriptor("cull", "active?", "https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling"),

  // [MethodId.PROJECT]: "",
  // [MethodId.REJECT]: "",

  /** Puzzle methods */
  [MethodId.EXTRA]: MethodDescriptor("extra", "waarde"),
  [MethodId.PUZZLE]: MethodDescriptor("puzzle", "soort (@=1 ⇒ vaste blokken, @2 ⇒ vrij instellen)"),
  [MethodId.OUTLINE]: MethodDescriptor("outlines", "aan?"),
  [MethodId.CORRECT]: MethodDescriptor("corrigeer", "toon?", "foute waarde"),
  [MethodId.PREMADE]: MethodDescriptor("voorgemaakt", "sla over?"),
  [MethodId.SELECT]: MethodDescriptor("geselecteerd", "functie?"),
  [MethodId.IGNORE]: MethodDescriptor("genegeerd"),
  [MethodId.CYCLIC]: MethodDescriptor("animatie cyclus", "duurtijd"),
  [MethodId.FEEDBACK]: MethodDescriptor("feedback", "toon?", "initiële waarde", "recursieve verwijzing"),
  [MethodId.ACTUATOR]: MethodDescriptor("actuator", "welke (@=0 ⇒ uit | @=1 ⇒ oog | @=oor)", "actuator verwijzing"),

  /** Drawing methods */
  [MethodId.MOVE_TO]: MethodDescriptor("beweeg naar", "start punt", "https://www.w3schools.com/tags/canvas_moveto.asp"),
  [MethodId.LINE_TO]: MethodDescriptor("teken lijn naar", "eind punt", "https://www.w3schools.com/tags/canvas_lineto.asp"),
  [MethodId.QUAD_TO]: MethodDescriptor("teken kwadratische curve naar", "eind punt", "controlepunt", "https://www.w3schools.com/tags/canvas_quadraticcurveto.asp"),
  [MethodId.CUBIC_TO]: MethodDescriptor("teken kubische curve naar", "eind punt", "eerste controlepunt", "tweede controlepunt", "https://www.w3schools.com/tags/canvas_beziercurveto.asp"),
  [MethodId.LAST_POINT]: MethodDescriptor("eindpunt"),
  // [MethodId.ARC_TO]: MethodDescriptor("teken cirkelboog naar", "start richting", "eind punt", "straal", "https://www.w3schools.com/tags/canvas_arcto.asp"),
  [MethodId.GET_POINTS]: MethodDescriptor("lijst van punten", "enkel hoekpunten?"),

  [MethodId.STROKE]: {
    [PrimitiveKind.Figure]: OverloadDescriptor("getekend", "kleur", "dikte", "ronde hoeken?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
    [anyInputKind]: OverloadDescriptor("getekend", "kleur", "dikte", "gesloten?", "ronde hoeken?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
  },

  /** Factory methods */
  // [MethodId.NEW_BINDING]: "",
  [MethodId.VECTOR_2D]: MethodDescriptor("vector", "x coördinaat", "y coördinaat", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)"),
  [MethodId.POINT_2D]: MethodDescriptor("point", "x coördinaat", "y coördinaat", "https://nl.wikipedia.org/wiki/Punt_(wiskunde)"),
  [MethodId.HOMOGENEOUS_2D]: MethodDescriptor("punt of vector", "x coördinaat", "y coördinaat", "w coördinaat", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.MATRIX_2D]: MethodDescriptor("transformatie", "x richting", "y richting", "oorsprong", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  [MethodId.COLOR_RGB]: MethodDescriptor("kleur", "rood", "groen", "blauw", "https://nl.wikipedia.org/wiki/RGB-kleursysteem"),
  [MethodId.COLOR_HSL]: MethodDescriptor("kleur", "tint", "verzadiging", "helderheid", "perceptueel?", "https://nl.wikipedia.org/wiki/HSL_(kleurruimte)"),
  [MethodId.SHAPE_NGON]: MethodDescriptor("regelmatige veelhoek", "aantal hoeken", "https://nl.wikipedia.org/wiki/Regelmatige_veelhoek"),
  [MethodId.GAMEPAD_SWITCH]: MethodDescriptor("gamepad schakelaar", "welke schakelaar", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_NUMBER]: MethodDescriptor("gamepad drukknop", "welke drukknop", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_VECTOR]: MethodDescriptor("gamepad richting", "welke richting", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.FIGURE_LINE]: MethodDescriptor("lijnstuk", "startpunt", "endpunt", "https://nl.wikipedia.org/wiki/Lijnstuk"),
  [MethodId.FIGURE_RECT]: MethodDescriptor("rechthoek", "breedte", "hoogte", "afgeronden hoeken", "middelpunt", "https://nl.wikipedia.org/wiki/Rechthoek"),
  [MethodId.FIGURE_CIRCLE]: MethodDescriptor("cirkel", "straal", "middelpunt", "https://nl.wikipedia.org/wiki/Cirkel"),
  [MethodId.FIGURE_ELLIPSE]: MethodDescriptor("ellips", "breedte", "hoogte", "middelpunt", "rotatie", "starthoek", "eindhoek", "andersom", "https://nl.wikipedia.org/wiki/Ellips_(wiskunde)"),
  [MethodId.DRAWING_PATH]: MethodDescriptor("lijntekening", "startpunt", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.BITMAP_IMAGE]: MethodDescriptor("externe sprite", "URI", "geïnterpoleerd?", "hoogte", "https://nl.wikipedia.org/wiki/Sprite_(computer)"),
  [MethodId.EMPTY_LIST]: MethodDescriptor("lege rij", "type", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.NUMERIC_RANGE]: MethodDescriptor("getallenrij", "start", "stap", "aantal", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.MOUSE_BUTTON]: MethodDescriptor("muis knop tracker", "welke knop (@=0 ⇒ eender)", "ook aanraakscherm?"),
  [MethodId.MOUSE_POSITION]: MethodDescriptor("muis positie tracker", "ook zwevend?", "ook aanraakscherm?"),
  [MethodId.TOUCH_TRACKER]: MethodDescriptor("multi-touch tracker"),
  [MethodId.TOUCH_DOWN]: MethodDescriptor("touch down tracker", "welke touch"),
  [MethodId.TOUCH_POSITION]: MethodDescriptor("touch positie tracker", "welke touch"),
  [MethodId.KEY_TRACKER]: MethodDescriptor("toetsenbord aanslag tracker (enkel in volledige scherm modus)", "code", "debug", "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#try_it_out"),
  [MethodId.UNIQUE_ID]: MethodDescriptor("unieke code"),
  [MethodId.SOUND_STREAM]: MethodDescriptor("gestreamd geluids bestand", "getal of URI"),
  [MethodId.SOUND_BUFFER]: MethodDescriptor("gebufferd geluids bestand", "getal of URI"),
  [MethodId.PIXELS_PER_UNIT]: MethodDescriptor("screen pixels per ViKiD unit"),
  // [MethodId.NEW_MICROPHONE]: MethodDescriptor("microfoon geluidsbron"),
  [MethodId.EMPTY_SET]: MethodDescriptor("lege verzameling", "type", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
  [MethodId.EMPTY_MAP]: MethodDescriptor("lege map (associatieve array)", "type", "https://nl.wikipedia.org/wiki/Associatieve_array"),

  /** List methods */
  [MethodId.APPEND]: MethodDescriptor("toegevoegd", "element", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.INSERT]: MethodDescriptor("ingevoegd", "index of indices", "element(en)", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.CONCAT]: MethodDescriptor("samengevoegd", "elementen", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.SLICE]: MethodDescriptor("uitgesneden", "index", "aantal", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.REMOVE]: MethodDescriptor("verwijderd", "index", "count", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.LENGTH]: MethodDescriptor("aantal elementen", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.ITEM]: MethodDescriptor("element(en)", "index of indices of condities", "wrap?", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.SEARCH]: MethodDescriptor("indices van", "element(en)", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.CONTAINS]: MethodDescriptor("bevat", "element(en)", "https://nl.wikipedia.org/wiki/Element_(wiskunde)"),
  [MethodId.REPLACE]: MethodDescriptor("vervang element", "index", "element", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.REVERSE]: MethodDescriptor("omgekeerd", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.SUM]: MethodDescriptor("sommatie", "nul als leeg?", "https://nl.wikipedia.org/wiki/Sommatie"),
  [MethodId.PRODUCT]: MethodDescriptor("product", "één als leeg?", "https://nl.wikipedia.org/wiki/Vermenigvuldigen#Notatie_en_terminologie"),
  [MethodId.FLATTEN]: MethodDescriptor("afgevlakt", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"),
  // [MethodId.TRIM]: MethodDescriptor("trim elementen", "welke (@>0 ⇒ met stamp=@ | @≤0 ⇒ zonder stamp=-@)", "update als leeg?"),
  [MethodId.FILL]: MethodDescriptor("gevuld met", "waarde", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.ORDER]: MethodDescriptor("indices van geordende elementen", "aflopend?"),
  [MethodId.REPEAT]: MethodDescriptor("herhaald als lijst", "aantal", "https://nl.wikipedia.org/wiki/Array"),
  [MethodId.TO_DRAWING]: MethodDescriptor("als lijntekening", "startpunt", "losse segmenten?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.TO_SET]: MethodDescriptor("als verzameling", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
  [MethodId.TO_MAP]: MethodDescriptor("als map (associatieve array)", "https://nl.wikipedia.org/wiki/Associatieve_array"),
  [MethodId.TRANSPOSE]: MethodDescriptor("getransponeerd", "https://nl.wikipedia.org/wiki/Getransponeerde_matrix"),

  [MethodId.PRINT]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("als tekst"),
    [PrimitiveKind.Color]: OverloadDescriptor("als tekst"),
    [PrimitiveKind.Vector]: OverloadDescriptor("als tekst", "cijfers na de komma"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("als tekst", "cijfers na de komma"),
    [PrimitiveKind.Number]: OverloadDescriptor("als tekst", "cijfers na de komma"),
  },

  [MethodId.CASE]: MethodDescriptor("letters", "mode (@<0 ⇒ kleine letters | @>0 ⇒ hoofdletters)", "https://nl.wikipedia.org/wiki/Onderkast"),
  [MethodId.JOIN]: MethodDescriptor("samengevoegd", "scheidingsteken"),
  [MethodId.FORMAT]: MethodDescriptor("formatteer naar tekst", "formaat"),
  [MethodId.PARSE]: MethodDescriptor("ontleed tekst", "formaat", "type"),
  [MethodId.PROMPT]: MethodDescriptor("vraag de gebruiker om tekst in te voeren", "standaard invoer", "open!"),
  [MethodId.ALERT]: MethodDescriptor("waarschuw de gebruiker", "open!"),
  [MethodId.CONFIRM]: MethodDescriptor("vraag de gebruiker om te bevestigen", "open!"),
  [MethodId.BROWSE]: MethodDescriptor("open als HTML pagina in de browser", "open!"),

  [MethodId.PAD]: MethodDescriptor("opgevuld met", "waarde", "lengte", "achteraan?"),

  [MethodId.INDEX]: MethodDescriptor("instantie index", "welke (@=0 ⇒ serie_nummer | @=1 ⇒ lot_index  | @=2 ⇒ instantie_id)"),

  [MethodId.GET_STAMP]: MethodDescriptor("vraag tijdstempel op"),
  [MethodId.SET_STAMP]: MethodDescriptor("wijzig tijdstempel", "nieuwe tijdstempel"),

  [MethodId.PLAY_SOUND]: MethodDescriptor("speel geluid", "aan?", "tempo"),
  [MethodId.SET_VOLUME]: MethodDescriptor("met volume", "waarde"),
  // [MethodId.ANALYSE_AUDIO]: MethodDescriptor("speel en analyseer geluid", "Fast Fourier Transform size", "minimum Decibels", "maximum Decibels", "smoothing time constant", "actief?", "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"),
  [MethodId.LOOP_SOUND]: {
    [PrimitiveKind.SoundBuffer]: OverloadDescriptor("loop geluid", "actief?", "starttijd", "duurtijd", "https://nl.wikipedia.org/wiki/Loop_(geluid)"),
    [PrimitiveKind.SoundStream]: OverloadDescriptor("loop geluid", "actief?", "https://nl.wikipedia.org/wiki/Loop_(geluid)"),
  },
  [MethodId.SLICE_SOUND]: MethodDescriptor("uitgesneden geluid", "starttijd", "duurtijd"),
  [MethodId.IS_PLAYING]: MethodDescriptor("wordt afgespeeld?"),
  [MethodId.ADD_AUDIO]: MethodDescriptor("plus", "audio"),
  [MethodId.SUM_AUDIO]: MethodDescriptor("som"),

  [MethodId.LOCAL_STORAGE]: MethodDescriptor("bij update, sla op", "sleutel", "laad!", "actief?"),
  [MethodId.DEBUG_PRINT]: MethodDescriptor("print naar debug console", "prefix", "actief?"),
  [MethodId.DEBUG_PAUSE]: MethodDescriptor("bij update, pauzeer de klok", "update", "actief?"),
  [MethodId.DEBUG_PAUSE]: MethodDescriptor("breakpoint", "actief?"),

  [MethodId.SATELLITE]: MethodDescriptor("satelliet", "type"),
  [MethodId.SEND]: MethodDescriptor("verstuur", "bericht", "aantal"),
  [MethodId.RECEIVE]: MethodDescriptor("ontvang berichten", "leeg?", "asap"),

  [MethodId.TUPLE_2]: MethodDescriptor("koppel", "element 0", "element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.TUPLE_3]: MethodDescriptor("tripel", "element 0", "element 1", "element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.TUPLE_4]: MethodDescriptor("quadrupel", "element 0", "element 1", "element 2", "element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.GET_ELEMENT_0]: MethodDescriptor("neem element 0", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.GET_ELEMENT_1]: MethodDescriptor("neem element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.GET_ELEMENT_2]: MethodDescriptor("neem element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.GET_ELEMENT_3]: MethodDescriptor("neem element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.TO_LIST]: MethodDescriptor("neem alle elementen", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.WITH_ELEMENT_0]: MethodDescriptor("vervang element 0", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.WITH_ELEMENT_1]: MethodDescriptor("vervang element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.WITH_ELEMENT_2]: MethodDescriptor("vervang element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  [MethodId.WITH_ELEMENT_3]: MethodDescriptor("vervang element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),

  [MethodId.SET_UNION]: MethodDescriptor("unie met", "verzameling", "https://nl.wikipedia.org/wiki/Vereniging_(verzamelingenleer)"),
  [MethodId.SET_INTERSECTION]: MethodDescriptor("doorsnede met", "verzameling", "https://nl.wikipedia.org/wiki/Doorsnede_(verzamelingenleer)"),
  [MethodId.SET_DIFFERENCE]: MethodDescriptor("verschil met", "verzameling", "https://nl.wikipedia.org/wiki/Complement_(verzamelingenleer)"),
  [MethodId.SET_SYMMETRIC_DIFFERENCE]: MethodDescriptor("symmetrisch verschil met", "verzameling", "https://nl.wikipedia.org/wiki/Symmetrisch_verschil"),


}
