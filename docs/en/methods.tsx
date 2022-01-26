import { MethodId, PrimitiveKind, AdjusterMethodId, ReceiverMethodId, makeListKindKey } from "language";
import { MethodDescriptions, MethodDescriptor, AdjusterDescriptor, anyInputKind, OverloadDescriptor } from "locale/MethodDescription";

export const methods: MethodDescriptions = {
  [AdjusterMethodId.Instance]: AdjusterDescriptor("one adjusted instance", "adjustments"),
  [AdjusterMethodId.Population]: AdjusterDescriptor("multiple adjusted instances", "adjustments", "initial amount", "spawn amount", "active?"),
  [AdjusterMethodId.Switcher]: AdjusterDescriptor("switched adjusted instance", "adjustments", "active?", "time scale"),
  [AdjusterMethodId.Simulator]: AdjusterDescriptor("looping adjusted instance", "adjustments", "active?", "time step"),

  [ReceiverMethodId.Track]: MethodDescriptor("receive message", "track"),

  [MethodId.ADD]: {
    [PrimitiveKind.Vector]: OverloadDescriptor("plus", "vector", "https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction"),
    [anyInputKind]: OverloadDescriptor("plus", "value", "https://en.wikipedia.org/wiki/Addition"),
  },
  [MethodId.SUB]: {
    [PrimitiveKind.Vector]: OverloadDescriptor("minus", "vector", "https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction"),
    [anyInputKind]: OverloadDescriptor("minus", "value", "https://en.wikipedia.org/wiki/Subtraction"),
  },
  [MethodId.MUL]: {
    [PrimitiveKind.Number]: OverloadDescriptor("times", "factor", "https://en.wikipedia.org/wiki/Multiplication"),
    [PrimitiveKind.Vector]: OverloadDescriptor("times", "factor", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("combined with", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  },
  [MethodId.DIV]: {
    [PrimitiveKind.Number]: OverloadDescriptor("divided by", "divisor", "https://en.wikipedia.org/wiki/Division_(mathematics)"),
    [PrimitiveKind.Vector]: OverloadDescriptor("divided by", "factor", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
  },
  [MethodId.NEG]: {
    [PrimitiveKind.Number]: OverloadDescriptor("negation", "https://en.wikipedia.org/wiki/Additive_inverse"),
    [PrimitiveKind.Vector]: OverloadDescriptor("negation", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
  },
  [MethodId.INVERT]: {
    [PrimitiveKind.Number]: OverloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Multiplicative_inverse"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Invertible_matrix"),
    [PrimitiveKind.Color]: OverloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Complementary_colors"),
    [PrimitiveKind.Graphics]: OverloadDescriptor("inverse", "https://en.wikipedia.org/wiki/Complement_(set_theory)"),
  },
  [MethodId.MOD]: MethodDescriptor("positive remainder", "divisor", "https://en.wikipedia.org/wiki/Remainder"),
  [MethodId.SIN]: MethodDescriptor("sine", "https://en.wikipedia.org/wiki/Trigonometric_functions"),
  [MethodId.COS]: MethodDescriptor("cosine", "https://en.wikipedia.org/wiki/Trigonometric_functions"),
  [MethodId.TAN]: MethodDescriptor("tangent", "https://en.wikipedia.org/wiki/Trigonometric_functions"),
  [MethodId.ASIN]: MethodDescriptor("arcsine", "https://en.wikipedia.org/wiki/Inverse_trigonometric_functions"),
  [MethodId.ACOS]: MethodDescriptor("arccosine", "https://en.wikipedia.org/wiki/Inverse_trigonometric_functions"),
  [MethodId.ATAN2]: MethodDescriptor("arctangent", "x", "https://en.wikipedia.org/wiki/Atan2"),
  [MethodId.ABS]: {
    [PrimitiveKind.Number]: OverloadDescriptor("absolute value", "https://en.wikipedia.org/wiki/Absolute_value"),
    [PrimitiveKind.Vector]: OverloadDescriptor("length", "https://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm"),
  },
  [MethodId.EXP]: MethodDescriptor("exponential function", "https://en.wikipedia.org/wiki/Exponential_function"),
  [MethodId.LOG]: MethodDescriptor("natural_logarithm", "https://en.wikipedia.org/wiki/Natural_logarithm"),
  [MethodId.POW]: MethodDescriptor("to the power", "number", "https://en.wikipedia.org/wiki/Exponentiation"),
  [MethodId.RANDOM_NUMBER]: MethodDescriptor("random number", "from", "to", "https://en.wikipedia.org/wiki/Random_number_generation"),
  [MethodId.PSEUDO_RANDOM_NUMBER]: MethodDescriptor("seeded number", "from", "to", "seed", "https://en.wikipedia.org/wiki/Random_number_generation"),
  [MethodId.FLOOR]: MethodDescriptor("rounded down", "https://en.wikipedia.org/wiki/Rounding"),
  [MethodId.CEIL]: MethodDescriptor("rounded up", "https://en.wikipedia.org/wiki/Rounding"),
  [MethodId.ROUND]: MethodDescriptor("rounded", "https://en.wikipedia.org/wiki/Rounding"),
  [MethodId.MIN]: MethodDescriptor("smallest", "number"),
  [MethodId.MAX]: MethodDescriptor("largest", "number"),
  [MethodId.LERP]: MethodDescriptor("interpolated to", "end", "factor", "https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support"),
  [MethodId.SIGN]: MethodDescriptor("sign", "https://en.wikipedia.org/wiki/Sign_(mathematics)"),
  [MethodId.SQRT]: MethodDescriptor("square root", "https://en.wikipedia.org/wiki/SquareRoot"),

  /** Boolean operators */
  [MethodId.EQU]: MethodDescriptor("is equal to", "value", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.NEQ]: MethodDescriptor("is not equal to", "value", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.GT]: MethodDescriptor("is greater than", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.GTE]: MethodDescriptor("is greater or equal to", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.LT]: MethodDescriptor("is smaller than", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.LTE]: MethodDescriptor("is smaller or equal to", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)"),
  [MethodId.AND]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("and", "boolean", "https://en.wikipedia.org/wiki/Logical_conjunction"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise AND", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#AND"),
  },
  [MethodId.OR]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("or", "boolean", "https://en.wikipedia.org/wiki/Logical_disjunction"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise OR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#OR"),
  },
  [MethodId.XOR]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("exclusive or", "boolean", "https://en.wikipedia.org/wiki/Exclusive_or"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise XOR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"),
  },
  [MethodId.NOT]: {
    [PrimitiveKind.Boolean]: OverloadDescriptor("not", "https://en.wikipedia.org/wiki/Negation"),
    [PrimitiveKind.Number]: OverloadDescriptor("bitwise NOT", "https://en.wikipedia.org/wiki/Bitwise_operation#NOT"),
  },
  [MethodId.EQU_EMPTY_SHAPE]: MethodDescriptor("is approximately empty?"),

  /* Conditional operators **/
  [MethodId.ITE]: MethodDescriptor("if", "boolean", "else", "https://en.wikipedia.org/wiki/%3F:#Python"),

  /** Stateful operators */
  [MethodId.INTEGRAL]: MethodDescriptor("plus time integral", "velocity", "https://en.wikipedia.org/wiki/Velocity"),
  [MethodId.DERIVATIVE]: MethodDescriptor("derivative wrt time", "active?", "https://en.wikipedia.org/wiki/Velocity#Instantaneous_velocity"),
  [MethodId.CLAMPED_INTEGRAL]: MethodDescriptor("plus time integraal, clamped", "minimum", "maximum", "velocity", "https://en.wikipedia.org/wiki/Velocity"),

  /** Event operators */
  [MethodId.WHEN]: MethodDescriptor("snapshot on", "update", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.TIMER]: MethodDescriptor("after", "seconds", "repeat?", "http://reactivex.io/documentation/operators/timer.html"),
  [MethodId.RISING]: MethodDescriptor("count rising edges", "https://en.wikipedia.org/wiki/Signal_edge"),
  [MethodId.CALM]: MethodDescriptor("block updates with same value", "shallow?", "https://rxmarbles.com/#distinctUntilChanged"),
  [MethodId.TAKE]: MethodDescriptor("take updates", "count", "http://reactivex.io/documentation/operators/take.html"),
  [MethodId.SKIP]: MethodDescriptor("skip updates", "count", "http://reactivex.io/documentation/operators/skip.html"),
  [MethodId.BUFFER]: MethodDescriptor("buffer updates", "amount (@<0 ⇒ count=-@ | @>0 ⇒ duration=@seconds)", "delay?", "active?", "http://reactivex.io/documentation/operators/buffer.html"),
  [MethodId.FILTER]: MethodDescriptor("filter updates", "pass through?", "http://reactivex.io/documentation/operators/filter.html"),
  [MethodId.SNAPSHOT]: MethodDescriptor("on update, snapshot of", "value", "http://reactivex.io/documentation/operators/sample.html"),
  [MethodId.ASAP]: MethodDescriptor("as soon as possible", "maximum intra-frame updates"),
  [MethodId.MERGE]: MethodDescriptor("merged with", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_LEFT]: MethodDescriptor("initialize and merge with", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.MERGE_BOTH]: MethodDescriptor("merged with", "simultaneous", "updates", "http://reactivex.io/documentation/operators/merge.html"),
  [MethodId.VSYNC]: MethodDescriptor("when shown on screen", "active?"),

  /** Transformation operators */
  [MethodId.TRANSLATE_V]: MethodDescriptor("translated", "vector", "https://en.wikipedia.org/wiki/Translation_(geometry)"),
  [MethodId.TRANSLATE_X]: MethodDescriptor("translated", "horizontally", "https://en.wikipedia.org/wiki/Translation_(geometry)"),
  [MethodId.TRANSLATE_Y]: MethodDescriptor("translated", "vertically", "https://en.wikipedia.org/wiki/Translation_(geometry)"),
  [MethodId.ROTATE]: MethodDescriptor("rotated", "hours", "https://en.wikipedia.org/wiki/Rotation_(mathematics)"),
  [MethodId.SCALE]: MethodDescriptor("scaled", "factor", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.SCALE_V]: MethodDescriptor("scaled", "factors", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.SCALE_X]: MethodDescriptor("scaled", "horizontally", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.SCALE_Y]: MethodDescriptor("scaled", "vertically", "https://en.wikipedia.org/wiki/Scaling_(geometry)"),
  [MethodId.PIXEL_SNAP]: MethodDescriptor("snapped to pixels", "origin?", "x axis?", "y axis?", "https://en.wikipedia.org/wiki/Snap_(computer_graphics)"),

  /** Graphics operators */
  [MethodId.PAINT_SOLID]: MethodDescriptor("painted", "color"),
  [MethodId.PAINT_LINEAR]: MethodDescriptor("painted", "start color", "end color", "start point", "end point"),
  [MethodId.OVERLAY]: {
    [anyInputKind]: OverloadDescriptor("in front of", "graphic"),
    [makeListKindKey(PrimitiveKind.Graphics)]: OverloadDescriptor("stacked on top of each other"),
  },
  [MethodId.UNDERLAY]: {
    [anyInputKind]: OverloadDescriptor("behind", "graphic"),
    [makeListKindKey(PrimitiveKind.Graphics)]: OverloadDescriptor("stacked one below the other"),
  },
  [MethodId.INTERSECTION]: MethodDescriptor("intersection with", "graphic", "https://en.wikipedia.org/wiki/Intersection_(set_theory)"),
  [MethodId.EXCLUSION]: MethodDescriptor("subtract", "graphic", "https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement"),
  [MethodId.PLOT_GRAPH]: MethodDescriptor("plot graph over time", "thickness", "tolerance", "maximum #points (@<0 ⇒ ∞ #points)", "https://en.wikipedia.org/wiki/Graph_of_a_function"),
  [MethodId.CLONE]: MethodDescriptor("duplicated", "count", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  [MethodId.TRANSFORM]: MethodDescriptor("transformed with", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  [MethodId.PLOT_POINTS]: MethodDescriptor("updates over time", "thickness", "tolerance", "maximum #points (@<0 ⇒ ∞ #points)", "https://en.wikipedia.org/wiki/Graph_of_a_function"),
  [MethodId.TRANSPARENTIZE]: MethodDescriptor("transparent", "factor", "https://en.wikipedia.org/wiki/Transparency_(graphic)"),
  [MethodId.FILLED]: {
    [anyInputKind]: OverloadDescriptor("as graphic", "color"),
    [PrimitiveKind.Vector]: OverloadDescriptor("as graphic", "thickness"),
    [PrimitiveKind.String]: OverloadDescriptor("as graphic", "horizontal text alignment", "vertical text alignment", "line spacing"),
  },
  [MethodId.CONTAINS_POINT]: MethodDescriptor("contains point?", "point"),
  [MethodId.RENDER]: MethodDescriptor("render to image", "width (pixels)", "height (pixels)", "interpolated?"),
  [MethodId.COMPOSE]: MethodDescriptor("compose", "operator", "foreground", "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation"),

  /** Vector and matrix operators */
  [MethodId.HOR]:
  {
    [anyInputKind]: OverloadDescriptor("horizontal coordinate", "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("red basis vector", "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"),
  },
  [MethodId.VER]: {
    [anyInputKind]: OverloadDescriptor("vertical coordinate", "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("green basis vector", "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"),
  },
  [MethodId.WEIGHT]: MethodDescriptor("w coordinate", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.ORIG]: {
    [PrimitiveKind.Matrix]: OverloadDescriptor("yellow basis origin", "https://en.wikipedia.org/wiki/Origin_(mathematics)"),
  },
  [MethodId.POST_TRANSFORMS]: MethodDescriptor("transformations after labeled graphic", "https://en.wikipedia.org/wiki/Graphics_pipeline#The_World_Coordinate_System"),
  [MethodId.DOT]: MethodDescriptor("dot product with", "vector", "https://en.wikipedia.org/wiki/Dot_product"),
  [MethodId.DET]: MethodDescriptor("determinant with", "vector", "https://en.wikipedia.org/wiki/Determinant#2_%C3%97_2_matrices"),
  [MethodId.REFLECT]: MethodDescriptor("reflected across", "direction", "https://en.wikipedia.org/wiki/Reflection_(mathematics)"),
  [MethodId.ANGLE]: MethodDescriptor("angle between", "vector", "radians?", "https://en.wikipedia.org/wiki/Dot_product#Geometric_definition"),
  [MethodId.TOWARDS]: MethodDescriptor("in the direction of", "vector"),
  [MethodId.CARTESIAN]: MethodDescriptor("to Euclidean point or vector", "https://en.wikipedia.org/wiki/Projective_space"),
  [MethodId.NORMALIZE]: MethodDescriptor("normalized", "https://en.wikipedia.org/wiki/Unit_vector"),
  [MethodId.CROSS]: MethodDescriptor("3D cross product product met", "vector", "https://en.wikipedia.org/wiki/Cross_product"),

  [MethodId.BOUNDING_POINT]: MethodDescriptor("point in AABB", "Barycentric coordinates", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_WIDTH]: MethodDescriptor("width of AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),
  [MethodId.BOUNDING_HEIGHT]: MethodDescriptor("heigt of AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box"),

  [MethodId.HIT_TEST]: MethodDescriptor("hits?", "with label", "without label", "active?", "maximum depth"),
  [MethodId.RAY_CAST]: MethodDescriptor("data hits", "data type", "with label", "without label", "active?"),
  [MethodId.HIT_REGION]: MethodDescriptor("hit region", "label", "data"),

  [MethodId.CULL]: MethodDescriptor("cull", "active?", "https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling"),

  // [MethodId.PROJECT]: "",
  // [MethodId.REJECT]: "",

  /** Puzzle methods */
  [MethodId.EXTRA]: MethodDescriptor("extra", "value"),
  [MethodId.PUZZLE]: MethodDescriptor("puzzle", "kind (@=1 ⇒ fixed blocks, @2 ⇒ free values)"),
  [MethodId.OUTLINE]: MethodDescriptor("outlines", "enabled?"),
  [MethodId.CORRECT]: MethodDescriptor("correct", "preview?", "wrong value"),
  [MethodId.PREMADE]: MethodDescriptor("pre-made", "skip?"),
  [MethodId.SELECT]: MethodDescriptor("selected", "functie?"),
  [MethodId.IGNORE]: MethodDescriptor("ignored"),
  [MethodId.CYCLIC]: MethodDescriptor("animation cycle", "duration"),
  [MethodId.FEEDBACK]: MethodDescriptor("feedback", "preview?", "initial value", "recursive reference"),
  [MethodId.ACTUATOR]: MethodDescriptor("actuator", "which (@=0 ⇒ off | @=1 ⇒ eye | @=2 ⇒ ear)", "actuator reference"),

  /** Drawing methods */
  [MethodId.MOVE_TO]: MethodDescriptor("move to", "start point", "https://www.w3schools.com/tags/canvas_moveto.asp"),
  [MethodId.LINE_TO]: MethodDescriptor("draw line to", "end point", "https://www.w3schools.com/tags/canvas_lineto.asp"),
  [MethodId.QUAD_TO]: MethodDescriptor("draw quadratic curve to", "end point", "control point", "https://www.w3schools.com/tags/canvas_quadraticcurveto.asp"),
  [MethodId.CUBIC_TO]: MethodDescriptor("draw cubic curve to", "end point", "first control point", "second control point", "https://www.w3schools.com/tags/canvas_beziercurveto.asp"),
  [MethodId.LAST_POINT]: MethodDescriptor("endpoint"),
  [MethodId.GET_POINTS]: MethodDescriptor("list of points", "corners only?"),
  // [MethodId.ARC_TO]: MethodDescriptor("teken circleboog naar", "start direction", "end point", "radius", "https://www.w3schools.com/tags/canvas_arcto.asp"),

  [MethodId.STROKE]: {
    [PrimitiveKind.Figure]: OverloadDescriptor("stroked", "color", "thickness", "round corners?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
    [anyInputKind]: OverloadDescriptor("stroked", "color", "thickness", "closed?", "round corners?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
  },

  /** Factory methods */
  // [MethodId.NEW_BINDING]: "",
  [MethodId.VECTOR_2D]: MethodDescriptor("vector", "x coordinate", "y coordinate", "https://en.wikipedia.org/wiki/Euclidean_vector"),
  [MethodId.POINT_2D]: MethodDescriptor("point", "x coordinate", "y coordinate", "https://en.wikipedia.org/wiki/Point_(geometry)"),
  [MethodId.HOMOGENEOUS_2D]: MethodDescriptor("point or vector", "x coordinate", "y coordinate", "w coordinate", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
  [MethodId.MATRIX_2D]: MethodDescriptor("transformation", "x direction", "y direction", "origin", "https://en.wikipedia.org/wiki/Affine_transformation"),
  [MethodId.COLOR_RGB]: MethodDescriptor("color", "red", "green", "blue", "https://en.wikipedia.org/wiki/RGB_color_model"),
  [MethodId.COLOR_HSL]: MethodDescriptor("color", "hue", "saturation", "lightness", "perceptual?", "https://en.wikipedia.org/wiki/HSL_and_HSV"),
  [MethodId.SHAPE_NGON]: MethodDescriptor("regular polygon", "corner count", "https://en.wikipedia.org/wiki/Regular_polygon"),
  [MethodId.GAMEPAD_SWITCH]: MethodDescriptor("gamepad switch", "switch id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_NUMBER]: MethodDescriptor("gamepad button", "button id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.GAMEPAD_VECTOR]: MethodDescriptor("gamepad direction", "direction id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout"),
  [MethodId.FIGURE_LINE]: MethodDescriptor("line segment", "start point", "end point", "https://en.wikipedia.org/wiki/Line_segment"),
  [MethodId.FIGURE_RECT]: MethodDescriptor("rectangle", "width", "height", "corner rounding", "center point", "https://en.wikipedia.org/wiki/Rectangle"),
  [MethodId.FIGURE_CIRCLE]: MethodDescriptor("circle", "radius", "center point", "https://en.wikipedia.org/wiki/Circle"),
  [MethodId.FIGURE_ELLIPSE]: MethodDescriptor("ellipse", "width", "height", "center point", "rotation", "start angle", "end angle", "reversed", "https://en.wikipedia.org/wiki/Ellipse"),
  [MethodId.DRAWING_PATH]: MethodDescriptor("line drawing", "start point", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.BITMAP_IMAGE]: MethodDescriptor("external sprite", "URI", "interpolated?", "height", "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"),
  [MethodId.EMPTY_LIST]: MethodDescriptor("empty array", "type", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.EMPTY_SET]: MethodDescriptor("empty set", "type", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
  [MethodId.EMPTY_MAP]: MethodDescriptor("empty map (associative array)", "key type", "value type", "https://en.wikipedia.org/wiki/Associative_array"),
  [MethodId.NUMERIC_RANGE]: MethodDescriptor("numeric range", "start", "step", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.MOUSE_BUTTON]: MethodDescriptor("mouse down tracker", "which button (@=0 ⇒ any)", "support touch?"),
  [MethodId.MOUSE_POSITION]: MethodDescriptor("mouse position tracker", "allow hover?", "support touch?"),
  [MethodId.TOUCH_TRACKER]: MethodDescriptor("multi touch tracker"),
  [MethodId.TOUCH_DOWN]: MethodDescriptor("touch down tracker", "which touch"),
  [MethodId.TOUCH_POSITION]: MethodDescriptor("touch position tracker", "which touch"),
  [MethodId.KEY_TRACKER]: MethodDescriptor("keyboard press tracker (full view only)", "code", "debug", "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#try_it_out"),
  [MethodId.UNIQUE_ID]: MethodDescriptor("unique code"),
  [MethodId.SOUND_STREAM]: MethodDescriptor("sound file stream", "id or URI"),
  [MethodId.SOUND_BUFFER]: MethodDescriptor("sound file buffer", "id or URI"),
  [MethodId.PIXELS_PER_UNIT]: MethodDescriptor("screen pixels per ViKiD unit"),
  // [MethodId.NEW_MICROPHONE]: MethodDescriptor("microphone sound source"),

  /** List methods */
  [MethodId.APPEND]: MethodDescriptor("append", "element", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.INSERT]: MethodDescriptor("insert", "index or indices", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.CONCAT]: MethodDescriptor("concatenate", "elements", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.SLICE]: MethodDescriptor("sliced", "index", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.REMOVE]: MethodDescriptor("removed", "index", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.LENGTH]: MethodDescriptor("element count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.ITEM]: MethodDescriptor("element(s) at", "index or indices or conditions", "wrap?", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.SEARCH]: MethodDescriptor("indices of", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.CONTAINS]: MethodDescriptor("contains", "element(s)", "https://en.wikipedia.org/wiki/Element_(mathematics)"),
  [MethodId.REPLACE]: MethodDescriptor("with element(s) at", "index or indices", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.REVERSE]: MethodDescriptor("reversed", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.SUM]: MethodDescriptor("sum", "zero if empty?", "https://simple.wikipedia.org/wiki/Sum"),
  [MethodId.PRODUCT]: MethodDescriptor("product", "one if empty?", "https://simple.wikipedia.org/wiki/Product_(mathematics)"),
  [MethodId.FLATTEN]: MethodDescriptor("flatten", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"),
  // [MethodId.TRIM]: MethodDescriptor("trim elements", "which (@>0 ⇒ without stamp=@ | @≤0 ⇒ with stamp=-@)", "update when empty?"),
  [MethodId.FILL]: MethodDescriptor("filled with", "value", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.ORDER]: MethodDescriptor("indices of ordered elements", "descending?"),
  [MethodId.REPEAT]: MethodDescriptor("repeated as list", "count", "https://en.wikipedia.org/wiki/Array_data_structure"),
  [MethodId.TO_DRAWING]: MethodDescriptor("as line drawing", "starting point", "separate segments?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  [MethodId.TO_SET]: MethodDescriptor("as set", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
  [MethodId.TO_MAP]: MethodDescriptor("as map (associative array)", "https://en.wikipedia.org/wiki/Associative_array"),
  [MethodId.TRANSPOSE]: MethodDescriptor("transposed", "https://en.wikipedia.org/wiki/Transpose"),

  [MethodId.PRINT]: {
    [PrimitiveKind.Vector]: OverloadDescriptor("as text", "digits after decimal point"),
    [PrimitiveKind.Matrix]: OverloadDescriptor("as text", "digits after decimal point"),
    [PrimitiveKind.Number]: OverloadDescriptor("as text", "digits after decimal point"),
    [anyInputKind]: OverloadDescriptor("as text"),
  },

  [MethodId.CASE]: MethodDescriptor("letter case", "mode (@<0 ⇒ lowercase | @>0 ⇒ uppercase)", "https://en.wikipedia.org/wiki/Letter_case"),
  [MethodId.JOIN]: MethodDescriptor("join text", "separator"),
  [MethodId.FORMAT]: MethodDescriptor("format to text", "format"),
  [MethodId.PARSE]: MethodDescriptor("parse from text", "formaat", "type"),
  [MethodId.PROMPT]: MethodDescriptor("ask the user for text input", "default input", "open!"),
  [MethodId.ALERT]: MethodDescriptor("notify the user", "open!"),
  [MethodId.CONFIRM]: MethodDescriptor("ask the user for confirmation", "open!"),
  [MethodId.BROWSE]: MethodDescriptor("open the HTML page in the browser", "open!"),

  [MethodId.PAD]: MethodDescriptor("padded with", "value", "lengte", "at the end?"),

  [MethodId.INDEX]: MethodDescriptor("instance index", "which (@=0 ⇒ serial_number | @=1 ⇒ batch_index | @=2 ⇒ instance_id)"),
  [MethodId.GET_STAMP]: MethodDescriptor("get timestamp"),
  [MethodId.SET_STAMP]: MethodDescriptor("set timestamp", "new timestamp"),

  [MethodId.PLAY_SOUND]: MethodDescriptor("play sound", "active?", "rate"),
  [MethodId.SET_VOLUME]: MethodDescriptor("with volume", "value"),
  // [MethodId.ANALYSE_AUDIO]: MethodDescriptor("play and analyse sound", "Fast Fourier Transform size", "minimum Decibels", "maximum Decibels", "smoothing time constant", "active?", "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"),
  [MethodId.LOOP_SOUND]: {
    [PrimitiveKind.SoundBuffer]: OverloadDescriptor("loop sound", "active?", "start time", "duration", "https://en.wikipedia.org/wiki/Loop_(music)"),
    [PrimitiveKind.SoundStream]: OverloadDescriptor("loop sound", "active?", "https://en.wikipedia.org/wiki/Loop_(music)"),
  },
  [MethodId.SLICE_SOUND]: MethodDescriptor("slice sound", "start time", "duration"),
  [MethodId.IS_PLAYING]: MethodDescriptor("is playing?"),
  [MethodId.ADD_AUDIO]: MethodDescriptor("plus", "audio"),
  [MethodId.SUM_AUDIO]: MethodDescriptor("sum"),

  [MethodId.LOCAL_STORAGE]: MethodDescriptor("on update, save", "key", "load!", "active?"),
  [MethodId.DEBUG_PRINT]: MethodDescriptor("print to debug console", "prefix", "active?"),
  [MethodId.DEBUG_PAUSE]: MethodDescriptor("breakpoint", "active?"),

  [MethodId.SATELLITE]: MethodDescriptor("satellite", "type"),
  [MethodId.SEND]: MethodDescriptor("send", "message", "count"),
  [MethodId.RECEIVE]: MethodDescriptor("receive messages", "empty?", "asap"),

  [MethodId.TUPLE_2]: MethodDescriptor("couple", "element 0", "element 1", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.TUPLE_3]: MethodDescriptor("triple", "element 0", "element 1", "element 2", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.TUPLE_4]: MethodDescriptor("quadruple", "element 0", "element 1", "element 2", "element 3", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.GET_ELEMENT_0]: MethodDescriptor("get element 0", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.GET_ELEMENT_1]: MethodDescriptor("get element 1", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.GET_ELEMENT_2]: MethodDescriptor("get element 2", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.GET_ELEMENT_3]: MethodDescriptor("get element 3", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.TO_LIST]: MethodDescriptor("get all elements", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.WITH_ELEMENT_0]: MethodDescriptor("replace element 0", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.WITH_ELEMENT_1]: MethodDescriptor("replace element 1", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.WITH_ELEMENT_2]: MethodDescriptor("replace element 2", "https://en.wikipedia.org/wiki/Tuple"),
  [MethodId.WITH_ELEMENT_3]: MethodDescriptor("replace element 3", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.WITH_ELEMENT_3]: MethodDescriptor("replace element 3", "https://en.wikipedia.org/wiki/Tuple"),

  [MethodId.SET_UNION]: MethodDescriptor("union with", "set", "https://en.wikipedia.org/wiki/Union_(set_theory)"),
  [MethodId.SET_INTERSECTION]: MethodDescriptor("intersection with", "set", "https://en.wikipedia.org/wiki/Intersection_(set_theory)"),
  [MethodId.SET_DIFFERENCE]: MethodDescriptor("difference with", "set", "https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement"),
  [MethodId.SET_SYMMETRIC_DIFFERENCE]: MethodDescriptor("symmetric difference with", "set", "https://en.wikipedia.org/wiki/Symmetric_difference"),
}
