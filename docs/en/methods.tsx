import { MethodId, AdjusterMethodId, ReceiverMethodId } from "language";
import { methodDescriptions, methodDescriptor, adjusterDescriptor, overloadDescriptor } from "locale/MethodDescription";

export const methods = methodDescriptions({
  [AdjusterMethodId.Instance]: adjusterDescriptor("one adjusted instance", "…adjustments"),
  [AdjusterMethodId.Population]: adjusterDescriptor("multiple adjusted instances", "…adjustments", "initial amount", "spawn amount", "active?"),
  [AdjusterMethodId.Switcher]: adjusterDescriptor("switched adjusted instance", "…adjustments", "active?", "time scale"),
  [AdjusterMethodId.Simulator]: adjusterDescriptor("looping adjusted instance", "…adjustments", "active?", "time step"),

  [ReceiverMethodId.Track]: methodDescriptor("receive message", "track"),

  [MethodId.ADD]: {
    "𝕍": overloadDescriptor("plus", "vector", "https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction"),
    _: overloadDescriptor("plus", "value", "https://en.wikipedia.org/wiki/Addition"),
  },
  [MethodId.SUB]: {
    "𝕍": overloadDescriptor("minus", "vector", "https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction"),
    _: overloadDescriptor("minus", "value", "https://en.wikipedia.org/wiki/Subtraction"),
  },
  [MethodId.MUL]: {
    "ℝ": overloadDescriptor("times", "factor", "https://en.wikipedia.org/wiki/Multiplication"),
    "𝕍": overloadDescriptor("times", "factor", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
    "𝕋": overloadDescriptor("combined with", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  },
  [MethodId.DIV]: {
    "ℝ": overloadDescriptor("divided by", "divisor", "https://en.wikipedia.org/wiki/Division_(mathematics)"),
    "𝕍": overloadDescriptor("divided by", "factor", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
  },
  [MethodId.NEG]: {
    "ℝ": overloadDescriptor("negation", "https://en.wikipedia.org/wiki/Additive_inverse"),
    "𝕍": overloadDescriptor("negation", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
  },
  [MethodId.INVERT]: {
    "ℝ": overloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Multiplicative_inverse"),
    "𝕋": overloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Invertible_matrix"),
    "𝕂": overloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Complementary_colors"),
    "𝔾": overloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Complement_(set_theory)"),
  },
  [MethodId.MOD]: methodDescriptor("positive remainder", "divisor", "https://en.wikipedia.org/wiki/Remainder"),
  [MethodId.SIN]: methodDescriptor("sine", "https://en.wikipedia.org/wiki/Trigonometric_functions"),
  [MethodId.COS]: methodDescriptor("cosine", "https://en.wikipedia.org/wiki/Trigonometric_functions"),
  [MethodId.TAN]: methodDescriptor("tangent", "https://en.wikipedia.org/wiki/Trigonometric_functions"),
  [MethodId.ASIN]: methodDescriptor("arcsine", "https://en.wikipedia.org/wiki/Inverse_trigonometric_functions"),
  [MethodId.ACOS]: methodDescriptor("arccosine", "https://en.wikipedia.org/wiki/Inverse_trigonometric_functions"),
  [MethodId.ATAN2]: methodDescriptor("arctangent", "x", "https://en.wikipedia.org/wiki/Atan2"),
  [MethodId.ABS]: {
    "ℝ": overloadDescriptor("absolute value", "https://en.wikipedia.org/wiki/Absolute_value"),
    "𝕍": overloadDescriptor("length", "https://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm"),
  },
  [MethodId.EXP]: methodDescriptor("exponential function", "https://en.wikipedia.org/wiki/Exponential_function"),
  [MethodId.LOG]: methodDescriptor("natural_logarithm", "https://en.wikipedia.org/wiki/Natural_logarithm"),
  [MethodId.POW]: methodDescriptor("to the power", "number", "https://en.wikipedia.org/wiki/Exponentiation"),
  [MethodId.RANDOM_NUMBER]: methodDescriptor("random number", "from", "to", "https://en.wikipedia.org/wiki/Random_number_generation"),
  [MethodId.PSEUDO_RANDOM_NUMBER]: methodDescriptor("seeded number", "from", "to", "seed", "https://en.wikipedia.org/wiki/Random_number_generation"),
  [MethodId.FLOOR]: methodDescriptor("rounded down", "https://en.wikipedia.org/wiki/Rounding"),
  [MethodId.CEIL]: methodDescriptor("rounded up", "https://en.wikipedia.org/wiki/Rounding"),
  [MethodId.ROUND]: methodDescriptor("rounded", "https://en.wikipedia.org/wiki/Rounding"),
  [MethodId.MIN]: methodDescriptor("smallest", "number"),
  [MethodId.MAX]: methodDescriptor("largest", "number"),
  [MethodId.LERP]: methodDescriptor("interpolated to", "end", "factor", "https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support"),
  [MethodId.SIGN]: methodDescriptor("sign", "https://en.wikipedia.org/wiki/Sign_(mathematics)"),
  [MethodId.SQRT]: methodDescriptor("square root", "https://en.wikipedia.org/wiki/SquareRoot"),

  /** Boolean operators */
  [MethodId.EQU]: methodDescriptor("is equal to", "value", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.NEQ]: methodDescriptor("is not equal to", "value", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.GT]: methodDescriptor("is greater than", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.GTE]: methodDescriptor("is greater or equal to", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.LT]: methodDescriptor("is smaller than", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.LTE]: methodDescriptor("is smaller or equal to", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.AND]: {
    "𝔹": overloadDescriptor("and", "boolean", "https://en.wikipedia.org/wiki/Logical_conjunction"),
    "ℝ": overloadDescriptor("bitwise AND", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#AND"),
  },
  [MethodId.OR]: {
    "𝔹": overloadDescriptor("or", "boolean", "https://en.wikipedia.org/wiki/Logical_disjunction"),
    "ℝ": overloadDescriptor("bitwise OR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#OR"),
  },
  [MethodId.XOR]: {
    "𝔹": overloadDescriptor("exclusive or", "boolean", "https://en.wikipedia.org/wiki/Exclusive_or"),
    "ℝ": overloadDescriptor("bitwise XOR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"),
  },
  [MethodId.NOT]: {
    "𝔹": overloadDescriptor("not", "https://en.wikipedia.org/wiki/Negation"),
    "ℝ": overloadDescriptor("bitwise NOT", "https://en.wikipedia.org/wiki/Bitwise_operation#NOT"),
  },
  [MethodId.EQU_EMPTY_SHAPE]: methodDescriptor("is approximately empty?"),

  /* Conditional operators **/
  [MethodId.ITE]: methodDescriptor("if", "boolean", "else", "https://en.wikipedia.org/wiki/%3F:#Python"),

  /** Stateful operators */
  [MethodId.INTEGRAL]: methodDescriptor("plus time integral", "velocity", "https://en.wikipedia.org/wiki/Velocity"),
  [MethodId.DERIVATIVE]: methodDescriptor("derivative wrt time", "active?", "https://en.wikipedia.org/wiki/Velocity#Instantaneous_velocity"),
  [MethodId.CLAMPED_INTEGRAL]: methodDescriptor("plus time integraal, clamped", "minimum", "maximum", "velocity", "https://en.wikipedia.org/wiki/Velocity"),

  /** Event operators */
  [MethodId.WHEN]: methodDescriptor("snapshot on", "update", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.TIMER]: methodDescriptor("after", "seconds", "repeat?", "http://reactivex.io/documentation/operators/timer.html"),
  [MethodId.RISING]: methodDescriptor("count rising edges", "https://en.wikipedia.org/wiki/Signal_edge"),
  [MethodId.CALM]: methodDescriptor("block updates with same value", "shallow?", "https://rxmarbles.com/#distinctUntilChanged"),
  [MethodId.TAKE]: methodDescriptor("take updates", "count", "http://reactivex.io/documentation/operators/take.html"),
  [MethodId.SKIP]: methodDescriptor("skip updates", "count", "http://reactivex.io/documentation/operators/skip.html"),
  [MethodId.BUFFER]: methodDescriptor("buffer updates", "amount [@<0 ⇒ count=-@ | @>0 ⇒ duration=@seconds]", "delay?", "active?", "http://reactivex.io/documentation/operators/buffer.html"),
  [MethodId.FILTER]: methodDescriptor("filter updates", "pass through?", "http://reactivex.io/documentation/operators/filter.html"),
  [MethodId.SNAPSHOT]: methodDescriptor("on update, snapshot of", "value", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.ASAP]: methodDescriptor("as soon as possible", "maximum intra-frame updates"),
  [MethodId.MERGE]: methodDescriptor("merged with", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_LEFT]: methodDescriptor("initialize and merge with", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_BOTH]: methodDescriptor("merged with", "simultaneous", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.VSYNC]: methodDescriptor("when shown on screen", "active?"),

  /** Transformation operators */
  [MethodId.TRANSLATE_V]: methodDescriptor("translated", "vector", "https://en.wikipedia.org/wiki/Translation_(geometry)"),
  [MethodId.TRANSLATE_X]: methodDescriptor("translated", "horizontally", "https://en.wikipedia.org/wiki/Translation_(geometry)"),
  [MethodId.TRANSLATE_Y]: methodDescriptor("translated", "vertically", "https://en.wikipedia.org/wiki/Translation_(geometry)"),
  [MethodId.ROTATE]: methodDescriptor("rotated", "hours", "https://en.wikipedia.org/wiki/Rotation_(mathematics)"),
  [MethodId.SCALE]: methodDescriptor("scaled", "factor", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.SCALE_V]: methodDescriptor("scaled", "factors", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.SCALE_X]: methodDescriptor("scaled", "horizontally", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.SCALE_Y]: methodDescriptor("scaled", "vertically", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.PIXEL_SNAP]: methodDescriptor("snapped to pixels", "origin?", "x axis?", "y axis?", "https://en.wikipedia.org/wiki/Snap_(computer_graphics)"),

  /** Graphics operators */
  [MethodId.PAINT_SOLID]: methodDescriptor("painted", "color"),
  [MethodId.PAINT_LINEAR]: methodDescriptor("painted", "start color", "end color", "start point", "end point"),
  [MethodId.OVERLAY]: {
    "[𝔾]": overloadDescriptor("stacked on top of each other"),
    _: overloadDescriptor("in front of", "graphic"),
  },
  [MethodId.UNDERLAY]: {
    "[𝔾]": overloadDescriptor("stacked one below the other"),
    _: overloadDescriptor("behind", "graphic"),
  },
  [MethodId.INTERSECTION]: methodDescriptor("intersection with", "graphic", "https://en.wikipedia.org/wiki/Intersection_(set_theory)"),
  [MethodId.EXCLUSION]: methodDescriptor("subtract", "graphic", "https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement"),
  [MethodId.PLOT_GRAPH]: methodDescriptor("plot graph over time", "thickness", "tolerance", "maximum #points [@<0 ⇒ ∞ #points]", "https://en.wikipedia.org/wiki/Graph_of_a_function"),
  [MethodId.CLONE]: methodDescriptor("duplicated", "count", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  [MethodId.TRANSFORM]: methodDescriptor("transformed with", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  [MethodId.PLOT_POINTS]: methodDescriptor("updates over time", "thickness", "tolerance", "maximum #points [@<0 ⇒ ∞ #points]", "https://en.wikipedia.org/wiki/Graph_of_a_function"),
  [MethodId.TRANSPARENTIZE]: methodDescriptor("transparent", "factor", "https://en.wikipedia.org/wiki/Transparency_(graphic)"),
  [MethodId.FILLED]: {
    "𝕍": overloadDescriptor("as graphic", "thickness"),
    "𝕊": overloadDescriptor("as graphic", "horizontal text alignment", "vertical text alignment", "line spacing"),
    _: overloadDescriptor("as graphic", "color"),
  },
  [MethodId.CONTAINS_POINT]: methodDescriptor("contains point?", "point"),
  [MethodId.RENDER]: methodDescriptor("render to image", "width [pixels]", "height [pixels]", "interpolated?"),
  [MethodId.COMPOSE]: methodDescriptor("compose", "operator", "foreground", "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"),

  /** Vector and matrix operators */
  [MethodId.HOR]:
  {
    "𝕋": overloadDescriptor("red basis vector", "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"),
    _: overloadDescriptor("horizontal coordinate", "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"),
  },
  [MethodId.VER]: {
    "𝕋": overloadDescriptor("green basis vector", "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"),
    _: overloadDescriptor("vertical coordinate", "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"),
  },
  [MethodId.WEIGHT]: methodDescriptor("w coordinate", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.ORIG]: {
    "𝕋": overloadDescriptor("yellow basis origin", "https://en.wikipedia.org/wiki/Origin_(mathematics)"),
  },
  [MethodId.POST_TRANSFORMS]: methodDescriptor("transformations after labeled graphic", "https://en.wikipedia.org/wiki/Graphics_pipeline#The_World_Coordinate_System"),
  [MethodId.DOT]: methodDescriptor("dot product with", "vector", "https://en.wikipedia.org/wiki/Dot_product"),
  [MethodId.DET]: methodDescriptor("determinant with", "vector", "https://en.wikipedia.org/wiki/Determinant#2_%C3%97_2_matrices"),
  [MethodId.REFLECT]: methodDescriptor("reflected across", "direction", "https://en.wikipedia.org/wiki/Reflection_(mathematics)"),
  [MethodId.ANGLE]: methodDescriptor("angle between", "vector", "radians?", "https://en.wikipedia.org/wiki/Dot_product#Geometric_definition"),
  [MethodId.TOWARDS]: methodDescriptor("in the direction of", "vector"),
  [MethodId.CARTESIAN]: methodDescriptor("to Euclidean point or vector", "https://en.wikipedia.org/wiki/Projective_space"),
  [MethodId.NORMALIZE]: methodDescriptor("normalized", "https://en.wikipedia.org/wiki/Unit_vector"),
  [MethodId.CROSS]: methodDescriptor("3D cross product product met", "vector", "https://en.wikipedia.org/wiki/Cross_product"),

  [MethodId.BOUNDING_POINT]: methodDescriptor("point in AABB", "Barycentric coordinates", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_WIDTH]: methodDescriptor("width of AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_HEIGHT]: methodDescriptor("heigt of AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),

  [MethodId.HIT_TEST]: methodDescriptor("hits?", "with label", "without label", "active?", "maximum depth"),
  [MethodId.RAY_CAST]: methodDescriptor("data hits", "data type", "with label", "without label", "active?"),
  [MethodId.HIT_REGION]: methodDescriptor("hit region", "label", "data"),

  [MethodId.CULL]: methodDescriptor("cull", "active?", "https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling"),

  // [MethodId.PROJECT]: "",
  // [MethodId.REJECT]: "",

  /** Puzzle methods */
  [MethodId.EXTRA]: methodDescriptor("extra", "value"),
  [MethodId.PUZZLE]: methodDescriptor("puzzle", "kind [@=1 ⇒ fixed blocks, @2 ⇒ free values]"),
  [MethodId.OUTLINE]: methodDescriptor("outlines", "enabled?"),
  [MethodId.CORRECT]: methodDescriptor("correct", "preview?", "wrong value"),
  [MethodId.PREMADE]: methodDescriptor("pre-made", "skip?"),
  [MethodId.SELECT]: methodDescriptor("selected", "functie?"),
  [MethodId.IGNORE]: methodDescriptor("ignored"),
  [MethodId.CYCLIC]: methodDescriptor("animation cycle", "duration"),
  [MethodId.FEEDBACK]: methodDescriptor("feedback", "preview?", "initial value", "recursive reference"),
  [MethodId.ACTUATOR]: methodDescriptor("actuator", "which [@=0 ⇒ off | @=1 ⇒ eye | @=2 ⇒ ear]", "actuator reference"),

  /** Drawing methods */
  [MethodId.MOVE_TO]: methodDescriptor("move to", "start point", "https://www.w3schools.com/tags/canvas_moveto.asp"),
  [MethodId.LINE_TO]: methodDescriptor("draw line to", "end point", "https://www.w3schools.com/tags/canvas_lineto.asp"),
  [MethodId.QUAD_TO]: methodDescriptor("draw quadratic curve to", "end point", "control point", "https://www.w3schools.com/tags/canvas_quadraticcurveto.asp"),
  [MethodId.CUBIC_TO]: methodDescriptor("draw cubic curve to", "end point", "first control point", "second control point", "https://www.w3schools.com/tags/canvas_beziercurveto.asp"),
  [MethodId.LAST_POINT]: methodDescriptor("endpoint"),
  [MethodId.GET_POINTS]: methodDescriptor("list of points", "corners only?"),
  // [MethodId.ARC_TO]: MethodDescriptor("teken circleboog naar", "start direction", "end point", "radius", "https://www.w3schools.com/tags/canvas_arcto.asp"),

  [MethodId.STROKE]: {
    "𝔽": overloadDescriptor("stroked", "color", "thickness", "round corners?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
    _: overloadDescriptor("stroked", "color", "thickness", "closed?", "round corners?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
  },

  /** Factory methods */
  // [MethodId.NEW_BINDING]: "",
  [MethodId.VECTOR_2D]: methodDescriptor("vector", "x coordinate", "y coordinate", "https://en.wikipedia.org/wiki/Euclidean_vector"),
  [MethodId.POINT_2D]: methodDescriptor("point", "x coordinate", "y coordinate", "https://en.wikipedia.org/wiki/Point_(geometry)"),
  [MethodId.HOMOGENEOUS_2D]: methodDescriptor("point or vector", "x coordinate", "y coordinate", "w coordinate", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.MATRIX_2D]: methodDescriptor("transformation", "x direction", "y direction", "origin", "https://en.wikipedia.org/wiki/Affine_transformation"),
  [MethodId.COLOR_RGB]: methodDescriptor("color", "red", "green", "blue", "https://en.wikipedia.org/wiki/RGB_color_model"),
  [MethodId.COLOR_HSL]: methodDescriptor("color", "hue", "saturation", "lightness", "perceptual?", "https://en.wikipedia.org/wiki/HSL_and_HSV"),
  [MethodId.SHAPE_NGON]: methodDescriptor("regular polygon", "corner count", "https://en.wikipedia.org/wiki/Regular_polygon"),
  [MethodId.GAMEPAD_SWITCH]: methodDescriptor("gamepad switch", "switch id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_NUMBER]: methodDescriptor("gamepad button", "button id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_VECTOR]: methodDescriptor("gamepad direction", "direction id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.FIGURE_LINE]: methodDescriptor("line segment", "start point", "end point", "https://en.wikipedia.org/wiki/Line_segment"),
  [MethodId.FIGURE_RECT]: methodDescriptor("rectangle", "width", "height", "corner rounding", "center point", "https://en.wikipedia.org/wiki/Rectangle"),
  [MethodId.FIGURE_CIRCLE]: methodDescriptor("circle", "radius", "center point", "https://en.wikipedia.org/wiki/Circle"),
  [MethodId.FIGURE_ELLIPSE]: methodDescriptor("ellipse", "width", "height", "center point", "rotation", "start angle", "end angle", "reversed", "https://en.wikipedia.org/wiki/Ellipse"),
  [MethodId.DRAWING_PATH]: methodDescriptor("line drawing", "start point", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.BITMAP_IMAGE]: methodDescriptor("external sprite", "URI", "interpolated?", "height", "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"),
  [MethodId.EMPTY_LIST]: methodDescriptor("empty array", "type", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.EMPTY_SET]: methodDescriptor("empty set", "type", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
  [MethodId.EMPTY_MAP]: methodDescriptor("empty map [associative array]", "key type", "value type", "https://en.wikipedia.org/wiki/Associative_array"),
  [MethodId.NUMERIC_RANGE]: methodDescriptor("numeric range", "start", "step", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.MOUSE_BUTTON]: methodDescriptor("mouse down tracker", "which button [@=0 ⇒ any]", "support touch?"),
  [MethodId.MOUSE_POSITION]: methodDescriptor("mouse position tracker", "allow hover?", "support touch?"),
  [MethodId.TOUCH_TRACKER]: methodDescriptor("multi touch tracker"),
  [MethodId.TOUCH_DOWN]: methodDescriptor("touch down tracker", "which touch"),
  [MethodId.TOUCH_POSITION]: methodDescriptor("touch position tracker", "which touch"),
  [MethodId.KEY_TRACKER]: methodDescriptor("keyboard press tracker [full view only]", "code", "debug", "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#try_it_out"),
  [MethodId.UNIQUE_ID]: methodDescriptor("unique code"),
  [MethodId.SOUND_STREAM]: methodDescriptor("sound file stream", "id or URI"),
  [MethodId.SOUND_BUFFER]: methodDescriptor("sound file buffer", "id or URI"),
  [MethodId.PIXELS_PER_UNIT]: methodDescriptor("screen pixels per ViKiD unit"),
  // [MethodId.NEW_MICROPHONE]: MethodDescriptor("microphone sound source"),

  /** List methods */
  [MethodId.APPEND]: methodDescriptor("append", "element", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.INSERT]: methodDescriptor("insert", "index or indices", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.CONCAT]: methodDescriptor("concatenate", "elements", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.SLICE]: methodDescriptor("sliced", "index", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.REMOVE]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescriptor("remove", "key", "https://en.wikipedia.org/wiki/Associative_array"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescriptor("remove", "key", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
    _: overloadDescriptor("remove", "index", "count", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.LENGTH]: methodDescriptor("element count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.ITEM]: methodDescriptor("element(s) at", "index or indices or conditions", "wrap?", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.SEARCH]: methodDescriptor("indices of", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.CONTAINS]: methodDescriptor("contains", "element(s)", "https://en.wikipedia.org/wiki/Element_(mathematics)"),
  [MethodId.REPLACE]: methodDescriptor("with element(s) at", "index or indices", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.REVERSE]: methodDescriptor("reversed", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.SUM]: methodDescriptor("sum", "zero if empty?", "https://simple.wikipedia.org/wiki/Sum"),
  [MethodId.PRODUCT]: methodDescriptor("product", "one if empty?", "https://simple.wikipedia.org/wiki/Product_(mathematics)"),
  [MethodId.FLATTEN]: methodDescriptor("flatten", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"),
  // [MethodId.TRIM]: MethodDescriptor("trim elements", "which [@>0 ⇒ without stamp=@ | @≤0 ⇒ with stamp=-@]", "update when empty?"),
  [MethodId.FILL]: methodDescriptor("filled with", "value", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.ORDER]: methodDescriptor("indices of ordered elements", "descending?"),
  [MethodId.REPEAT]: methodDescriptor("repeated as list", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.TO_DRAWING]: methodDescriptor("as line drawing", "starting point", "separate segments?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.TO_SET]: methodDescriptor("as set", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
  [MethodId.TO_MAP]: methodDescriptor("as map [associative array]", "https://en.wikipedia.org/wiki/Associative_array"),
  [MethodId.TRANSPOSE]: methodDescriptor("transposed", "https://en.wikipedia.org/wiki/Transpose"),

  [MethodId.PRINT]: {
    "𝕍": overloadDescriptor("as text", "digits after decimal point"),
    "𝕋": overloadDescriptor("as text", "digits after decimal point"),
    "ℝ": overloadDescriptor("as text", "digits after decimal point"),
    _: overloadDescriptor("as text"),
  },

  [MethodId.CASE]: methodDescriptor("letter case", "mode [@<0 ⇒ lowercase | @>0 ⇒ uppercase]", "https://en.wikipedia.org/wiki/Letter_case"),
  [MethodId.JOIN]: methodDescriptor("join text", "separator"),
  [MethodId.FORMAT]: methodDescriptor("format to text", "format", "indent"),
  [MethodId.PARSE]: methodDescriptor("parse from text", "formaat", "type"),
  [MethodId.PROMPT]: methodDescriptor("ask the user for text input", "default input", "open!"),
  [MethodId.ALERT]: methodDescriptor("notify the user", "open!"),
  [MethodId.CONFIRM]: methodDescriptor("ask the user for confirmation", "open!"),
  [MethodId.BROWSE]: methodDescriptor("open the HTML page in the browser", "open!"),

  [MethodId.PAD]: methodDescriptor("padded with", "value", "length", "at the end?"),

  [MethodId.INDEX]: methodDescriptor("instance index", "which [@=0 ⇒ serial_number | @=1 ⇒ batch_index | @=2 ⇒ instance_id]"),
  [MethodId.GET_STAMP]: methodDescriptor("get timestamp"),
  [MethodId.SET_STAMP]: methodDescriptor("set timestamp", "new timestamp"),

  [MethodId.PLAY_SOUND]: methodDescriptor("play sound", "active?", "rate"),
  [MethodId.SET_VOLUME]: methodDescriptor("with volume", "value"),
  // [MethodId.ANALYSE_AUDIO]: MethodDescriptor("play and analyse sound", "Fast Fourier Transform size", "minimum Decibels", "maximum Decibels", "smoothing time constant", "active?", "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"),
  [MethodId.LOOP_SOUND]: {
    "💥": overloadDescriptor("loop sound", "active?", "start time", "duration", "https://en.wikipedia.org/wiki/Loop_(music)"),
    "🎶": overloadDescriptor("loop sound", "active?", "https://en.wikipedia.org/wiki/Loop_(music)"),
  },
  [MethodId.SLICE_SOUND]: methodDescriptor("slice sound", "start time", "duration"),
  [MethodId.IS_PLAYING]: methodDescriptor("is playing?"),
  [MethodId.ADD_AUDIO]: methodDescriptor("plus", "audio"),
  [MethodId.SUM_AUDIO]: methodDescriptor("sum"),

  [MethodId.LOCAL_STORAGE]: methodDescriptor("on update, save", "key", "load!", "active?"),
  [MethodId.DEBUG_PRINT]: methodDescriptor("print to debug console", "prefix", "active?"),
  [MethodId.DEBUG_PAUSE]: methodDescriptor("breakpoint", "active?"),

  [MethodId.SATELLITE]: methodDescriptor("satellite", "type"),
  [MethodId.SEND]: methodDescriptor("send", "message", "count"),
  [MethodId.RECEIVE]: methodDescriptor("receive messages", "empty?", "asap"),

  [MethodId.TUPLE_2]: methodDescriptor("couple", "element 0", "element 1", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.TUPLE_3]: methodDescriptor("triple", "element 0", "element 1", "element 2", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.TUPLE_4]: methodDescriptor("quadruple", "element 0", "element 1", "element 2", "element 3", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.GET_ELEMENT_0]: methodDescriptor("get element 0", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.GET_ELEMENT_1]: methodDescriptor("get element 1", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.GET_ELEMENT_2]: methodDescriptor("get element 2", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.GET_ELEMENT_3]: methodDescriptor("get element 3", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.TO_LIST]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescriptor("get all elements", "ordering"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescriptor("get all elements", "ordering"),
    _: overloadDescriptor("get all elements", "https://en.wikipedia.org/wiki/Tuple"),
  },

  [MethodId.WITH_ELEMENT_0]: methodDescriptor("replace element 0", "new element", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.WITH_ELEMENT_1]: methodDescriptor("replace element 1", "new element", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.WITH_ELEMENT_2]: methodDescriptor("replace element 2", "new element", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.WITH_ELEMENT_3]: methodDescriptor("replace element 3", "new element", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.SET_UNION]: methodDescriptor("union with", "set", "https://en.wikipedia.org/wiki/Union_(set_theory)"),
  [MethodId.SET_INTERSECTION]: methodDescriptor("intersection with", "set", "https://en.wikipedia.org/wiki/Intersection_(set_theory)"),
  [MethodId.SET_DIFFERENCE]: methodDescriptor("difference with", "set", "https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement"),
  [MethodId.SET_SYMMETRIC_DIFFERENCE]: methodDescriptor("symmetric difference with", "set", "https://en.wikipedia.org/wiki/Symmetric_difference"),
});
