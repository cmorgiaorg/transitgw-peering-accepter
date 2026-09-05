# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcceptTransitPeering <a name="AcceptTransitPeering" id="transitgw-peering-accepter.AcceptTransitPeering"></a>

#### Initializers <a name="Initializers" id="transitgw-peering-accepter.AcceptTransitPeering.Initializer"></a>

```typescript
import { AcceptTransitPeering } from 'transitgw-peering-accepter'

new AcceptTransitPeering(scope: Construct, id: string, transitGatewayAttachmentId: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="transitgw-peering-accepter.AcceptTransitPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="transitgw-peering-accepter.AcceptTransitPeering.Initializer.parameter.id"></a>

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="transitgw-peering-accepter.AcceptTransitPeering.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="transitgw-peering-accepter.AcceptTransitPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="transitgw-peering-accepter.AcceptTransitPeering.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="transitgw-peering-accepter.AcceptTransitPeering.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="transitgw-peering-accepter.AcceptTransitPeering.isConstruct"></a>

```typescript
import { AcceptTransitPeering } from 'transitgw-peering-accepter'

AcceptTransitPeering.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="transitgw-peering-accepter.AcceptTransitPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#transitgw-peering-accepter.AcceptTransitPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="transitgw-peering-accepter.AcceptTransitPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---





