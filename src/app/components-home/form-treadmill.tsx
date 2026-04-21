export default function FormTreadmill() {
    return (
        <div className="home__bottom-container">
            <div className="form media-scroller snaps-inline">
                {/* Physical */}
                <div id="form-physical" className="treadmill__physical form__element media-element">
                    <div className="treadmill__physical-heading field-heading">
                        Treadmill Physical
                    </div>
                    <select
                        className="form__dropdown"
                        name="treadmill-physical "
                        id=""
                    >
                        <option disabled selected>
                            Select Option
                        </option>
                        <option value="broken-button">Button Broken</option>
                        <option value="broken-display">Display Broken</option>
                        <option value="broken-grabHandle">
                            Grab Handle Broken
                        </option>
                        <option value="powerCord-damaged">
                            Power Cord Damaged
                        </option>
                    </select>
                </div>

                {/* Mechanical */}
                <div id="form-mechanical" className="treadmill__mechanical form__element media-element">
                    <div className="treadmill__mechanical-heading field-heading">
                        Mechanical Issue
                    </div>
                    <select
                        name="treadmill-mechanical"
                        id="treadmill-mechanical"
                        className="form__dropdown"
                    >
                        <option disabled selected>
                            Select Option
                        </option>
                        <option value="no-power">No Power</option>
                        <option value="slow-speed">Slow Speed</option>
                        <option value="speed-inconsistant">
                            Speed Inconsistant
                        </option>
                        <option value="rough-operation">Rough Operation</option>
                        <option value="noisy-operation">Noisy Operation</option>
                        <option value="belt-fraying">Belt Fraying</option>
                    </select>
                </div>
                <div id="form-cosmetic" className="treadmill__mechanical form__element media-element">
                    <div className="treadmill__mechanical-heading field-heading">
                        Mechanical Issue
                    </div>
                    <select
                        name="treadmill-mechanical"
                        id="treadmill-mechanical-2"
                        className="form__dropdown"
                    >
                        <option disabled selected>
                            Select Option
                        </option>
                        <option value="no-power">No Power</option>
                        <option value="slow-speed">Slow Speed</option>
                        <option value="speed-inconsistant">
                            Speed Inconsistant
                        </option>
                        <option value="rough-operation">Rough Operation</option>
                        <option value="noisy-operation">Noisy Operation</option>
                        <option value="belt-fraying">Belt Fraying</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
