# Signature
```vikid-signature
```

# Synopsis
```vikid-synopsis
```

# Description
__Numeric addition__
- as soon as both `input` and `value` are initialized, the `output` becomes `input` + `value`.
- when `input` or `value` updates, the `output` sum is updated.
- [more...](https://en.wikipedia.org/wiki/Addition)

# Example
- shifts the oscillating `input` by two units.
- the initialization of the `input` is delayed by one second.

```vikid-script
𝕍i𝕂i𝔻 v0.7-642-g83fec8270bfd s21
{
  input📡: { 
    speed: 1,
    ‘active?’✉: ☑.timer(1, ☒).merge(‘active?’.not().timer(π.mul(2).div(speed), ☑)),
    sine: 0.when(‘active?’).integral(speed.ite(‘active?’, 0)).sin().mul(3)
  },
  value📡: { value📡: { value📡: 2 } },
  ‘⌂’: { «output: input.add(value)» }
}```

