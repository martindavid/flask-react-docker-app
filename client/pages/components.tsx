import React, { Component } from "react";
import { Layout } from "components/layout";

export default class ComponentPage extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-12">
            <h1>Component Page</h1>
          </div>
        </div>
      </Layout>
    );
  }
}
