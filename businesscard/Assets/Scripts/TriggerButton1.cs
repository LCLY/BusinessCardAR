using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerButton1 : MonoBehaviour
{
    public GameObject button1;
    Animator clickbutton1;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (Input.GetMouseButtonDown(0))
        {
            if (Physics.Raycast(ray, out hit))
            {
                GameObject obj = hit.collider.gameObject;
                Debug.Log("obj: " + obj.name);
                if (obj.name == "button1")
                {
                   // openCabinet.SetTrigger("clickbutton2"); //play the animation                   
                }
            }
        }


        if (Input.touchCount > 0) //using mouse
        {
            var touch = Input.touches[0];
            if (touch.phase == TouchPhase.Began)
            {
                if (Physics.Raycast(ray, out hit))
                {
                    GameObject obj = hit.collider.gameObject;
                    if (obj.name == "button1")
                    {
                        Debug.Log("obj: " + obj.name);
                    }
                }
            }
        }
    }
}
