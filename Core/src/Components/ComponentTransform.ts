namespace Fudge {
    /**
     * Class to hold the transformation-data of the node it is attached to. Extends PivotComponent for fewer redundancies.
     * Affects the origin of a node and its descendants. Use [[PivotComponent]] to transform only the mesh attached
     * @authors Jascha Karagöl, HFU, 2019 | Jirka Dell'Oro-Friedl, HFU, 2019
     */
    export class ComponentTransform extends ComponentPivot {
        /*TODO: delete comments */private worldMatrix: Matrix4x4;

        public constructor() {
            super();
            this.worldMatrix = Matrix4x4.identity();
        }
        //*/
        // Get and Set methods.######################################################################################
        public get WorldMatrix(): Matrix4x4 {
            /* */return this.worldMatrix;
            //* */return this.matrix;
        }
        public set WorldMatrix(_matrix: Matrix4x4) {
            /* */this.worldMatrix = _matrix;
            //* */this.matrix = _matrix; 
        }
        public get WorldPosition(): Vector3 {
            /* */return new Vector3(this.worldMatrix.data[12], this.worldMatrix.data[13], this.worldMatrix.data[14]);
            //* */return new Vec3(this.matrix.Data[12], this.matrix.Data[13], this.matrix.Data[14]);
        }

        public serialize(): Serialization {
            // TODO: save translation, rotation and scale as vectors for readability and manipulation

            let serialization: Serialization = {
                worldMatrix: this.worldMatrix
            };
            serialization[super.constructor.name] = super.serialize();
            return serialization;
        }
        public deserialize(_serialization: Serialization): Serializable {
            this.WorldMatrix = _serialization.worldMatrix;
            super.deserialize(_serialization.ComponentPivot);
            return this;
        }
    }
}